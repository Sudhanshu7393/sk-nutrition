"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { SITE_CONFIG } from "@/data/config";
import { CustomerOrder } from "@/types";
import {
  X,
  ShieldCheck,
  Truck,
  CreditCard,
  Banknote,
  MessageCircle,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    subtotal,
    discount,
    deliveryFee,
    cartTotal,
    clearCart,
    setActiveOrder,
    pincode: sharedPincode,
    pincodeInfo,
    isPincodeLoading,
    updatePincode,
    userProfile,
  } = useCart();

  const [name, setName] = useState(userProfile ? userProfile.name : "");
  const [phone, setPhone] = useState(userProfile ? userProfile.phone : "");
  const [pincode, setPincode] = useState(sharedPincode || "232101");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("Mughalsarai, Uttar Pradesh");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "upi" | "whatsapp">("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (userProfile) {
      if (userProfile.name) setName(userProfile.name);
      if (userProfile.phone) setPhone(userProfile.phone);
    }
    if (sharedPincode) {
      setPincode(sharedPincode);
    }
  }, [userProfile, sharedPincode, isCheckoutOpen]);

  // When pincode info resolves, auto update the City/State
  React.useEffect(() => {
    if (pincodeInfo && pincodeInfo.valid) {
      const loc = pincodeInfo.district
        ? `${pincodeInfo.district}, ${pincodeInfo.state}`
        : pincodeInfo.formattedLocation;
      setCity(loc);
    }
  }, [pincodeInfo]);

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim() || pincode.length !== 6) {
      alert("Please fill in your Name, 10-digit Phone, 6-digit Pincode, and Delivery Address.");
      return;
    }

    setIsSubmitting(true);

    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const orderId = `SK-${randomSuffix}`;

    const newOrder: CustomerOrder = {
      orderId,
      customerName: name,
      customerPhone: phone,
      customerAddress: `${address} (Pincode: ${pincode})`,
      landmark,
      city,
      pincode,
      paymentMethod,
      items: [...cart],
      subtotal,
      discount,
      deliveryFee,
      total: cartTotal,
      orderDate: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "confirmed",
    };

    setTimeout(() => {
      setActiveOrder(newOrder);
      clearCart();
      setIsSubmitting(false);
      setIsCheckoutOpen(false);

      if (paymentMethod === "whatsapp") {
        let message = `🛒 *NEW ORDER CONFIRMED - ${SITE_CONFIG.name}*\n`;
        message += `📍 *Ravi Nagar, Mughalsarai (Authorised Peakvitals Partner)*\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `🆔 *Order ID:* #${orderId}\n`;
        message += `👤 *Customer Name:* ${name}\n`;
        message += `📞 *Phone Number:* ${phone}\n`;
        message += `🏠 *Delivery Address:* ${address}, ${landmark ? landmark + ", " : ""}${city}\n`;
        message += `📮 *PIN Code:* ${pincode}\n`;
        message += `💳 *Payment Mode:* Cash on Delivery (COD) / Pay on Delivery\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `📦 *ITEMS ORDERED:*\n`;
        newOrder.items.forEach((item, idx) => {
          message += `${idx + 1}️⃣ *${item.product.name}*\n`;
          message += `   • Flavour: ${item.flavor} | ${item.weight}\n`;
          message += `   • Qty: ${item.quantity} x ₹${item.price.toLocaleString("en-IN")} = ₹${(item.price * item.quantity).toLocaleString("en-IN")}\n\n`;
        });
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `💰 *TOTAL PAYABLE: ₹${cartTotal.toLocaleString("en-IN")}*\n`;
        message += `🚚 *Delivery Status:* Dispatched via Express Courier\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `✅ Please confirm and dispatch my 100% Genuine Peakvitals Pre-Workout order. Thank you!`;

        const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, "_blank");
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white border border-gray-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-gray-900 font-sans">
        {/* Close Button */}
        <button
          onClick={() => setIsCheckoutOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-orange-600 text-xs font-black uppercase tracking-wider">
              <Truck className="w-4 h-4" />
              <span>Fast Mughalsarai & Chandauli Dispatch</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
              Checkout & Delivery Details
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Enter delivery details for 100% Genuine Peakvitals Pre-Workout. Cash on Delivery (COD) & UPI available.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 98765 43210"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-1">
                  Delivery Pincode *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                      setPincode(val);
                      if (val.length === 6) {
                        updatePincode(val);
                      }
                    }}
                    placeholder="e.g. 232101"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-black text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                  {isPincodeLoading && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-orange-600 animate-pulse">
                      Checking Area...
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Live Detected Real Location & All India Delivery Info */}
            {pincodeInfo && pincodeInfo.valid && (
              <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>
                      {pincodeInfo.area ? `${pincodeInfo.area}, ` : ""}
                      <strong>{pincodeInfo.district}</strong>, {pincodeInfo.state}
                    </span>
                  </span>
                  <span className="text-[10px] bg-emerald-200 text-emerald-950 font-black px-2 py-0.5 rounded-full uppercase shrink-0">
                    All India Delivery ✅
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-600 pt-0.5">
                  <span className="font-semibold text-gray-800">{pincodeInfo.deliveryTime}</span>
                  <span>• COD Available 🟢</span>
                  <span>• Free Delivery Above ₹999</span>
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-1">
                Complete Delivery Address *
              </label>
              <textarea
                required
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House / Flat No., Street, Colony, Landmark"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-1">
                  City / District *
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Auto-detected from Pincode"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-1">
                  Nearby Landmark
                </label>
                <input
                  type="text"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  placeholder="e.g. Near Railway Station / Gym"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="pt-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                Select Payment Method:
              </label>
              <div className="space-y-2">
                <label
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === "cod"
                      ? "bg-orange-50 border-orange-500 shadow-xs"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-orange-500 w-4 h-4"
                  />
                  <Banknote className="w-5 h-5 text-emerald-600" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-900">Cash / UPI on Delivery (COD)</p>
                    <p className="text-[11px] text-gray-500">Pay cash or UPI scanner when supplements arrive at doorstep</p>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod("upi")}
                  className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === "upi"
                      ? "bg-purple-50 border-purple-500 shadow-xs"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                    className="accent-purple-600 w-4 h-4"
                  />
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-900">Instant UPI (GPay / PhonePe / Paytm / BHIM)</p>
                    <p className="text-[11px] text-gray-500">Scan QR or pay directly via UPI</p>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod("whatsapp")}
                  className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === "whatsapp"
                      ? "bg-emerald-50 border-emerald-500 shadow-xs"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "whatsapp"}
                    onChange={() => setPaymentMethod("whatsapp")}
                    className="accent-emerald-600 w-4 h-4"
                  />
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-900">Confirm directly on WhatsApp</p>
                    <p className="text-[11px] text-gray-500">Chat with store executive on 9118732066</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Price breakdown */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Items ({cart.length})</span>
                <span className="font-bold text-gray-900">₹{subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Authenticity Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between text-base font-black text-gray-900 pt-2 border-t border-gray-200">
                <span>Total Payable</span>
                <span className="text-orange-600">₹{cartTotal}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Placing Your Order...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Place Order (₹{cartTotal})</span>
                </>
              )}
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Store: {SITE_CONFIG.address} | Call/WhatsApp: {SITE_CONFIG.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
