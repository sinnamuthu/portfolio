"use client";

import { useLayoutEffect } from "react";

export default function HeroScrollReveal() {
  useLayoutEffect(() => {
    const visual = document.getElementById("hero-visual");
    const hero = document.getElementById("hero-intro");

    if (!visual || !hero) {
      return;
    }

    let frame = 0;
    let visualTop = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const isMobile = window.matchMedia("(max-width: 720px)").matches;
        if (isMobile) {
          visual.style.setProperty("--hero-scroll-progress", "1");
          return;
        }

        const stickyTop = 128;
        const scrollDistance = 300;
        const progress = Math.min(
          1,
          Math.max(
            0,
            (window.scrollY - (visualTop - stickyTop)) / scrollDistance,
          ),
        );

        visual.style.setProperty("--hero-scroll-progress", `${progress}`);
      });
    };

    const measureAndUpdate = () => {
      const previousPosition = visual.style.position;
      const previousTop = visual.style.top;

      visual.style.position = "relative";
      visual.style.top = "auto";
      visualTop =
        visual.getBoundingClientRect().top + window.scrollY;
      visual.style.position = previousPosition;
      visual.style.top = previousTop;
      updateProgress();
    };

    measureAndUpdate();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", measureAndUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", measureAndUpdate);
    };
  }, []);

  return null;
}
