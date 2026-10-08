"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import {
  X,
  Calculator,
  Flame,
  Dumbbell,
  Droplets,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface NutritionCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NutritionCalculatorModal: React.FC<NutritionCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { addToCart, setIsCartOpen } = useCart();

  const [weight, setWeight] = useState(68);
  const [height, setHeight] = useState(172);
  const [age, setAge] = useState(24);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<"sedentary" | "light" | "moderate" | "intense">("intense");
  const [goal, setGoal] = useState<"muscle" | "gain" | "fatloss">("muscle");

  if (!isOpen) return null;

  const bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    intense: 1.725,
  };

  const tdee = Math.round(bmr * activityMultipliers[activity]);

  let targetCalories = tdee;
  let targetProtein = 0;
  let targetCarbs = 0;
  let targetFats = 0;

  if (goal === "muscle") {
    targetCalories = Math.round(tdee + 250);
    targetProtein = Math.round(weight * 2.0);
    targetFats = Math.round((targetCalories * 0.25) / 9);
    targetCarbs = Math.round((targetCalories - targetProtein * 4 - targetFats * 9) / 4);
  } else if (goal === "gain") {
    targetCalories = Math.round(tdee + 600);
    targetProtein = Math.round(weight * 1.8);
    targetFats = Math.round((targetCalories * 0.25) / 9);
    targetCarbs = Math.round((targetCalories - targetProtein * 4 - targetFats * 9) / 4);
  } else {
    targetCalories = Math.round(tdee - 450);
    targetProtein = Math.round(weight * 2.2);
    targetFats = Math.round((targetCalories * 0.25) / 9);
    targetCarbs = Math.round((targetCalories - targetProtein * 4 - targetFats * 9) / 4);
  }

  const targetWater = (weight * 0.04).toFixed(1);

  const recommendedProduct =
    goal === "gain"
      ? PRODUCTS.find((p) => p.id === "peakvitals-mass-gainer") || PRODUCTS[0]
      : goal === "fatloss"
      ? PRODUCTS.find((p) => p.id === "ripped-shred-thermo-carnitine") || PRODUCTS[0]
      : PRODUCTS.find((p) => p.id === "conquer-ultra-maxx-preworkout") || PRODUCTS[0];

  const handleAddRecommended = () => {
    addToCart(
      recommendedProduct,
      recommendedProduct.flavors[0],
      recommendedProduct.weightOptions[0].label,
      recommendedProduct.price,
      1
    );
    onClose();
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white border border-[#ECE5D8] rounded-3xl shadow-2xl p-6 sm:p-8 text-[#1B1A17]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF7F1] hover:bg-[#ECE5D8] text-[#6B6559] hover:text-[#1B1A17] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-[#A07524] text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Smart Nutrition & Macro Tool</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1B1A17] mt-1">
              Personalized Protein & Pre-Workout Calculator
            </h2>
            <p className="text-xs text-[#6B6559] mt-0.5">
              Discover how much protein, pre-workout stimulus, and macros your body needs based on clinical fitness calculations.
            </p>
          </div>

          {/* Form Inputs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="text-[11px] font-bold text-[#6B6559] uppercase tracking-wider block mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                min={30}
                max={200}
                className="w-full bg-[#FAF7F1] border border-[#ECE5D8] rounded-xl px-3 py-2 text-sm text-center font-bold text-[#1B1A17] focus:outline-none focus:border-[#C99A3C]"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#6B6559] uppercase tracking-wider block mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                min={100}
                max={230}
                className="w-full bg-[#FAF7F1] border border-[#ECE5D8] rounded-xl px-3 py-2 text-sm text-center font-bold text-[#1B1A17] focus:outline-none focus:border-[#C99A3C]"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#6B6559] uppercase tracking-wider block mb-1">
                Age
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                min={14}
                max={80}
                className="w-full bg-[#FAF7F1] border border-[#ECE5D8] rounded-xl px-3 py-2 text-sm text-center font-bold text-[#1B1A17] focus:outline-none focus:border-[#C99A3C]"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#6B6559] uppercase tracking-wider block mb-1">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as any)}
                className="w-full bg-[#FAF7F1] border border-[#ECE5D8] rounded-xl px-2 py-2 text-xs font-bold text-[#1B1A17] focus:outline-none focus:border-[#C99A3C]"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* Goal & Activity Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] font-bold text-[#6B6559] uppercase tracking-wider block mb-1.5">
                Target Fitness Goal:
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  type="button"
                  onClick={() => setGoal("muscle")}
                  className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                    goal === "muscle"
                      ? "bg-[#1B1A17] text-white border-[#1B1A17]"
                      : "bg-[#FAF7F1] text-[#1B1A17] border-[#ECE5D8] hover:border-[#6B6559]"
                  }`}
                >
                  Lean Muscle
                </button>
                <button
                  type="button"
                  onClick={() => setGoal("gain")}
                  className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                    goal === "gain"
                      ? "bg-[#1B1A17] text-white border-[#1B1A17]"
                      : "bg-[#FAF7F1] text-[#1B1A17] border-[#ECE5D8] hover:border-[#6B6559]"
                  }`}
                >
                  Bulk Weight
                </button>
                <button
                  type="button"
                  onClick={() => setGoal("fatloss")}
                  className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                    goal === "fatloss"
                      ? "bg-[#1B1A17] text-white border-[#1B1A17]"
                      : "bg-[#FAF7F1] text-[#1B1A17] border-[#ECE5D8] hover:border-[#6B6559]"
                  }`}
                >
                  Shred Fat
                </button>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#6B6559] uppercase tracking-wider block mb-1.5">
                Workout Activity Level:
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value as any)}
                className="w-full bg-[#FAF7F1] border border-[#ECE5D8] rounded-xl px-3 py-2 text-xs font-semibold text-[#1B1A17] focus:outline-none focus:border-[#C99A3C]"
              >
                <option value="sedentary">Little to no exercise</option>
                <option value="light">Light exercise (1-3 days/week)</option>
                <option value="moderate">Moderate gym (3-5 days/week)</option>
                <option value="intense">Heavy gym training (6+ days/week)</option>
              </select>
            </div>
          </div>

          {/* Results Grid */}
          <div className="bg-[#FAF7F1] p-5 rounded-3xl border border-[#ECE5D8] space-y-4">
            <h3 className="text-xs font-bold text-[#A07524] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Your Recommended Targets:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded-2xl border border-[#ECE5D8] text-center shadow-xs">
                <Dumbbell className="w-4 h-4 text-[#A07524] mx-auto mb-1" />
                <span className="text-xl sm:text-2xl font-black text-[#A07524] block">
                  {targetProtein}g
                </span>
                <span className="text-[10px] text-[#6B6559] font-bold">Target Protein</span>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-[#ECE5D8] text-center shadow-xs">
                <Flame className="w-4 h-4 text-red-500 mx-auto mb-1" />
                <span className="text-xl sm:text-2xl font-black text-[#1B1A17] block">
                  {targetCalories}
                </span>
                <span className="text-[10px] text-[#6B6559] font-bold">Daily Calories</span>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-[#ECE5D8] text-center shadow-xs">
                <span className="text-[10px] font-bold text-blue-600 block mb-1">Carbs / Fat</span>
                <span className="text-sm font-black text-[#1B1A17] block">
                  {targetCarbs}g / {targetFats}g
                </span>
                <span className="text-[10px] text-[#6B6559] font-bold">Macros</span>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-[#ECE5D8] text-center shadow-xs">
                <Droplets className="w-4 h-4 text-cyan-600 mx-auto mb-1" />
                <span className="text-xl sm:text-2xl font-black text-cyan-700 block">
                  {targetWater} L
                </span>
                <span className="text-[10px] text-[#6B6559] font-bold">Daily Water</span>
              </div>
            </div>

            {/* Recommended Product Box */}
            <div className="pt-3 border-t border-[#ECE5D8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.name}
                  className="w-14 h-14 object-cover rounded-xl bg-white border border-[#ECE5D8] shrink-0"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#A07524] tracking-wider">
                    Recommended Formula:
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1B1A17]">
                    {recommendedProduct.name}
                  </h4>
                  <p className="text-xs font-black text-[#A07524] mt-0.5">
                    ₹{recommendedProduct.price} • {recommendedProduct.brand}
                  </p>
                </div>
              </div>

              <button
                onClick={handleAddRecommended}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#1B1A17] hover:bg-[#2E2A24] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm"
              >
                <span>Add to Bag</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E2C47A]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
