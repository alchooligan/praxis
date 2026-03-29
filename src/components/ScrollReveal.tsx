"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    function handleReveals() {
      document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("visible");
      });
    }

    function handleProcess() {
      const steps = document.querySelectorAll(".process-step");
      const dots = [
        document.getElementById("dot1"),
        document.getElementById("dot2"),
        document.getElementById("dot3"),
      ];
      const fill = document.getElementById("progressFill");
      let activeCount = 0;

      steps.forEach((step, i) => {
        const rect = step.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        if (center < window.innerHeight * 0.75) {
          step.classList.add("visible");
          if (dots[i]) dots[i]!.classList.add("active");
          activeCount = i + 1;
        }
      });

      if (fill) {
        const pct = activeCount === 0 ? 0 : activeCount === 1 ? 15 : activeCount === 2 ? 50 : 85;
        fill.style.height = pct + "%";
      }
    }

    function onScroll() {
      handleReveals();
      handleProcess();
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
