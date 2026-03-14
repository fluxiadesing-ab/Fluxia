// context/OnboardingContext.tsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";

type OnboardingContextType = {
  step: number;
  next: () => void;
  dismiss: () => void;
};

const OnboardingContext = createContext<OnboardingContextType | null>(null);

export const OnboardingProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(-1); // -1 = لم يتحمل بعد

  useEffect(() => {
    const seen = localStorage.getItem("onboarding_done");
    if (!seen) setStep(0); // ابدأ من الخطوة الأولى
  }, []);

  const next = () => {
  if (step < 1) {
    setStep(step + 1);
    // تمرير للمكون الثاني
    setTimeout(() => {
      const productsSection = document.getElementById("products-section");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  } else {
    dismiss();
  }
};

  const dismiss = () => {
    localStorage.setItem("onboarding_done", "true");
    setStep(-1);
  };

  return (
    <OnboardingContext.Provider value={{ step, next, dismiss }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext)!;
