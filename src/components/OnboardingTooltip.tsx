"use client";

import { useOnboarding } from "@/context/OnboardingContext";

type Props = {
  step: number;
  message: string;
  position?: "bottom" | "top" | "left" | "right";
  children: React.ReactNode;
};

export const OnboardingTooltip = ({ step: targetStep, message, position = "bottom", children }: Props) => {
  const { step, next, dismiss } = useOnboarding();
  const isVisible = step === targetStep;

  return (
    <div className="relative inline-block">
      {isVisible && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={dismiss}
        />
      )}

      <div className={`relative ${isVisible ? "z-50" : ""}`}>
        {children}

        {isVisible && (
  <div className={`absolute z-50 w-48 md:w-64 bg-white text-black rounded-xl shadow-2xl p-3 md:p-4
    ${position === "bottom" ? "top-full mt-3 left-1/2 -translate-x-1/2" : ""}
    ${position === "top" ? "bottom-full mb-3 left-1/2 -translate-x-1/2" : ""}
  `}>
    <div className={`absolute w-3 h-3 bg-white rotate-45
      ${position === "bottom" ? "-top-1.5 left-1/2 -translate-x-1/2" : ""}
      ${position === "top" ? "-bottom-1.5 left-1/2 -translate-x-1/2" : ""}
    `} />
    <p className="text-xs md:text-sm font-medium mb-2 md:mb-3">{message}</p>
    <div className="flex gap-2">
      <button onClick={next} className="bg-black text-white px-3 md:px-4 py-1 md:py-1.5 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-800">
        Got it
      </button>
      <button onClick={dismiss} className="text-gray-400 text-xs md:text-sm hover:text-gray-600">
        Skip
      </button>
    </div>
  </div>
)}
      </div>
    </div>
  );
};
