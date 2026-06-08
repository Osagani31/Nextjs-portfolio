"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.12, rootMargin = "0px 0px -8% 0px" } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
