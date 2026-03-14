// components/OnboardingTooltip.tsx
"use client";
import { useOnboarding } from "@/context/OnboardingContext";

type Props = {
  step: number;         // هذا التولتيب يظهر في أي خطوة
  message: string;
  position?: "bottom" | "top" | "left" | "right";
  children: React.ReactNode;
};

export const OnboardingTooltip = ({ step: targetStep, message, position = "bottom", children }: Props) => {
  const { step, next, dismiss } = useOnboarding();
  const isVisible = step === targetStep;

  return (
    <div className="relative inline-block">
      {/* الـ overlay الداكن */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={dismiss}
        />
      )}

      {/* المحتوى الأصلي مع highlight */}
      <div className={`relative ${isVisible ? "z-50" : ""}`}>
        {children}

        {/* البالون */}
        {isVisible && (
          <div className={`absolute z-50 w-64 bg-white text-black rounded-xl shadow-2xl p-4
            ${position === "bottom" ? "top-full mt-3 left-1/2 -translate-x-1/2" : ""}
            ${position === "top" ? "bottom-full mb-3 left-1/2 -translate-x-1/2" : ""}
          `}>
            {/* السهم */}
            <div className={`absolute w-3 h-3 bg-white rotate-45
              ${position === "bottom" ? "-top-1.5 left-1/2 -translate-x-1/2" : ""}
              ${position === "top" ? "-bottom-1.5 left-1/2 -translate-x-1/2" : ""}
            `} />

            <p className="text-sm font-medium mb-3">{message}</p>
            <div className="flex gap-2">
              <button
                onClick={next}
                className="bg-black text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-800"
              >
                  Got it

              </button>
              <button
                onClick={dismiss}
                className="text-gray-400 text-sm hover:text-gray-600"
              >
                Skip
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
