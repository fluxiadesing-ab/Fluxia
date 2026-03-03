"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export default function MetaPixelTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // انتظر حتى يتحمل fbq بالكامل
    const trackPageView = () => {
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "PageView");
      }
    };

    // تأخير بسيط لضمان تحميل fbq
    const timer = setTimeout(trackPageView, 300);
    return () => clearTimeout(timer);
    
  }, [pathname, searchParams]);

  return null;
}
