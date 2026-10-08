export interface PincodeInfo {
  pincode: string;
  valid: boolean;
  area: string;
  district: string;
  state: string;
  formattedLocation: string;
  isLocal: boolean;
  deliveryTime: string;
  courierPartner: string;
  codAvailable: boolean;
  freeShippingAvailable: boolean;
  message: string;
}

// In-memory cache to avoid redundant API calls
const cache = new Map<string, PincodeInfo>();

// Offline fallback mapping based on India Post 2-digit PIN prefixes
const STATE_PREFIX_MAP: Record<string, { state: string; sampleCity: string }> = {
  "11": { state: "Delhi", sampleCity: "New Delhi" },
  "12": { state: "Haryana", sampleCity: "Gurgaon / Faridabad" },
  "13": { state: "Haryana", sampleCity: "Ambala / Panipat" },
  "14": { state: "Punjab", sampleCity: "Ludhiana / Jalandhar" },
  "15": { state: "Punjab", sampleCity: "Bathinda" },
  "16": { state: "Chandigarh", sampleCity: "Chandigarh" },
  "17": { state: "Himachal Pradesh", sampleCity: "Shimla" },
  "18": { state: "Jammu & Kashmir", sampleCity: "Jammu" },
  "19": { state: "Jammu & Kashmir", sampleCity: "Srinagar" },
  "20": { state: "Uttar Pradesh", sampleCity: "Noida / Aligarh" },
  "21": { state: "Uttar Pradesh", sampleCity: "Allahabad / Prayagraj" },
  "22": { state: "Uttar Pradesh", sampleCity: "Varanasi / Lucknow" },
  "23": { state: "Uttar Pradesh", sampleCity: "Chandauli / Mughalsarai" },
  "24": { state: "Uttarakhand", sampleCity: "Dehradun / Haridwar" },
  "25": { state: "Uttar Pradesh", sampleCity: "Meerut / Muzaffarnagar" },
  "26": { state: "Uttarakhand", sampleCity: "Haldwani / Nainital" },
  "27": { state: "Uttar Pradesh", sampleCity: "Gorakhpur / Basti" },
  "28": { state: "Uttar Pradesh", sampleCity: "Agra / Jhansi" },
  "30": { state: "Rajasthan", sampleCity: "Jaipur" },
  "31": { state: "Rajasthan", sampleCity: "Udaipur" },
  "32": { state: "Rajasthan", sampleCity: "Kota" },
  "33": { state: "Rajasthan", sampleCity: "Bikaner" },
  "34": { state: "Rajasthan", sampleCity: "Jodhpur" },
  "36": { state: "Gujarat", sampleCity: "Rajkot" },
  "37": { state: "Gujarat", sampleCity: "Jamnagar" },
  "38": { state: "Gujarat", sampleCity: "Ahmedabad" },
  "39": { state: "Gujarat", sampleCity: "Surat / Vadodara" },
  "40": { state: "Maharashtra", sampleCity: "Mumbai / Goa" },
  "41": { state: "Maharashtra", sampleCity: "Pune" },
  "42": { state: "Maharashtra", sampleCity: "Nashik" },
  "43": { state: "Maharashtra", sampleCity: "Aurangabad / Chhatrapati Sambhaji Nagar" },
  "44": { state: "Maharashtra", sampleCity: "Nagpur" },
  "45": { state: "Madhya Pradesh", sampleCity: "Indore" },
  "46": { state: "Madhya Pradesh", sampleCity: "Bhopal" },
  "47": { state: "Madhya Pradesh", sampleCity: "Gwalior" },
  "48": { state: "Madhya Pradesh", sampleCity: "Jabalpur" },
  "49": { state: "Chhattisgarh", sampleCity: "Raipur" },
  "50": { state: "Telangana", sampleCity: "Hyderabad" },
  "51": { state: "Andhra Pradesh", sampleCity: "Tirupati / Kurnool" },
  "52": { state: "Andhra Pradesh", sampleCity: "Vijayawada" },
  "53": { state: "Andhra Pradesh", sampleCity: "Visakhapatnam" },
  "56": { state: "Karnataka", sampleCity: "Bengaluru" },
  "57": { state: "Karnataka", sampleCity: "Mangaluru / Mysuru" },
  "58": { state: "Karnataka", sampleCity: "Hubballi / Belagavi" },
  "59": { state: "Karnataka", sampleCity: "Belagavi" },
  "60": { state: "Tamil Nadu", sampleCity: "Chennai" },
  "61": { state: "Tamil Nadu", sampleCity: "Thanjavur" },
  "62": { state: "Tamil Nadu", sampleCity: "Madurai" },
  "63": { state: "Tamil Nadu", sampleCity: "Salem / Vellore" },
  "64": { state: "Tamil Nadu", sampleCity: "Coimbatore" },
  "67": { state: "Kerala", sampleCity: "Kozhikode" },
  "68": { state: "Kerala", sampleCity: "Kochi / Ernakulam" },
  "69": { state: "Kerala", sampleCity: "Thiruvananthapuram" },
  "70": { state: "West Bengal", sampleCity: "Kolkata" },
  "71": { state: "West Bengal", sampleCity: "Howrah / Hooghly" },
  "72": { state: "West Bengal", sampleCity: "Medinipur" },
  "73": { state: "West Bengal", sampleCity: "Siliguri / Jalpaiguri" },
  "74": { state: "West Bengal", sampleCity: "North 24 Parganas" },
  "75": { state: "Odisha", sampleCity: "Bhubaneswar" },
  "76": { state: "Odisha", sampleCity: "Cuttack / Berhampur" },
  "77": { state: "Odisha", sampleCity: "Rourkela / Sambalpur" },
  "78": { state: "Assam", sampleCity: "Guwahati" },
  "79": { state: "North East", sampleCity: "Shillong / Imphal / Agartala / Aizawl" },
  "80": { state: "Bihar", sampleCity: "Patna" },
  "81": { state: "Bihar", sampleCity: "Bhagalpur / Munger" },
  "82": { state: "Bihar", sampleCity: "Gaya" },
  "83": { state: "Jharkhand", sampleCity: "Ranchi / Jamshedpur" },
  "84": { state: "Bihar", sampleCity: "Muzaffarpur" },
  "85": { state: "Bihar", sampleCity: "Purnia / Katihar" },
};

export async function lookupIndianPincode(pincode: string): Promise<PincodeInfo> {
  const cleanPin = pincode.replace(/\D/g, "").slice(0, 6);

  if (cleanPin.length !== 6 || !/^[1-9][0-9]{5}$/.test(cleanPin)) {
    return {
      pincode: cleanPin,
      valid: false,
      area: "",
      district: "",
      state: "",
      formattedLocation: "Invalid 6-digit Pincode",
      isLocal: false,
      deliveryTime: "N/A",
      courierPartner: "N/A",
      codAvailable: false,
      freeShippingAvailable: false,
      message: "Please enter a valid 6-digit Indian Postal Pincode.",
    };
  }

  // Check memory cache
  if (cache.has(cleanPin)) {
    return cache.get(cleanPin)!;
  }

  const isLocal = cleanPin.startsWith("232") || cleanPin.startsWith("221");

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

    const res = await fetch(`https://api.postalpincode.in/pincode/${cleanPin}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data[0]?.Status === "Success" && data[0]?.PostOffice?.length > 0) {
        const po = data[0].PostOffice[0];
        const areaName = po.Name || "";
        const districtName = po.District || "";
        const stateName = po.State || "";

        const formatted = `${areaName ? areaName + ", " : ""}${districtName}, ${stateName}`;

        const result: PincodeInfo = {
          pincode: cleanPin,
          valid: true,
          area: areaName,
          district: districtName,
          state: stateName,
          formattedLocation: formatted,
          isLocal,
          deliveryTime: isLocal
            ? "⚡ Same-Day / 24-Hr Delivery (Ravi Nagar Store Priority)"
            : "🚚 2 to 4 Days (All India Express Air Courier)",
          courierPartner: isLocal
            ? "S.K Nutrition Mughalsarai Local Express"
            : "BlueDart / Delhivery / Xpressbees Air",
          codAvailable: true,
          freeShippingAvailable: true,
          message: `All India Delivery active! Orders to ${formatted} are dispatched same-day.`,
        };

        cache.set(cleanPin, result);
        return result;
      }
    }
  } catch {
    // API timeout or network issue - fallback to prefix directory
  }

  // Fallback using PIN prefix
  const prefix2 = cleanPin.slice(0, 2);
  const fallbackMeta = STATE_PREFIX_MAP[prefix2] || {
    state: "India",
    sampleCity: "All India Delivery Zone",
  };

  const formatted = `${fallbackMeta.sampleCity}, ${fallbackMeta.state}`;

  const fallbackResult: PincodeInfo = {
    pincode: cleanPin,
    valid: true,
    area: fallbackMeta.sampleCity,
    district: fallbackMeta.sampleCity,
    state: fallbackMeta.state,
    formattedLocation: formatted,
    isLocal,
    deliveryTime: isLocal
      ? "⚡ Same-Day / 24-Hr Delivery (Mughalsarai & Chandauli)"
      : "🚚 2 to 4 Days Express Delivery",
    courierPartner: isLocal
      ? "S.K Nutrition Local Fleet"
      : "Express Air Delivery (BlueDart / Delhivery)",
    codAvailable: true,
    freeShippingAvailable: true,
    message: `All India Serviceable! We deliver Peakvitals Pre-Workout to ${formatted}.`,
  };

  cache.set(cleanPin, fallbackResult);
  return fallbackResult;
}
