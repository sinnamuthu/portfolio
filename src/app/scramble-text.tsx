"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./scramble-text.module.css";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export default function ScrambleText({
  text,
  className,
  replayOnScrollDirectionChange = false,
}: {
  text: string;
  className?: string;
  replayOnScrollDirectionChange?: boolean;
}) {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLSpanElement>(null);
  const id = useId();

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let step = text.length;
    let previousScrollY = window.scrollY;
    let previousDirection = 0;
    let startTimeout = 0;
    let interval = 0;

    const animate = () => {
      if (reducedMotion) {
      return;
      }

      window.clearTimeout(startTimeout);
      window.clearInterval(interval);
      step = 0;

      startTimeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        step += 1;
        setDisplayText(
          [...text]
            .map((character, index) => {
              if (!/[a-z]/i.test(character) || index < step) {
                return character;
              }

              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join(""),
        );

        if (step >= text.length) {
          window.clearInterval(interval);
        }
      }, 48);
      }, 40);
    };

    animate();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - previousScrollY;
      previousScrollY = currentScrollY;

      if (!replayOnScrollDirectionChange || Math.abs(delta) < 2) {
        return;
      }

      const direction = Math.sign(delta);
      const bounds = elementRef.current?.getBoundingClientRect();
      const isVisible =
        bounds !== undefined &&
        bounds.bottom > 0 &&
        bounds.top < window.innerHeight;

      if (previousDirection !== 0 && direction !== previousDirection && isVisible) {
        animate();
      }

      previousDirection = direction;
    };

    if (replayOnScrollDirectionChange) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.clearTimeout(startTimeout);
      window.clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [replayOnScrollDirectionChange, text]);

  return (
    <span
      id={id}
      ref={elementRef}
      className={`${styles.scramble} ${className ?? ""}`}
      aria-label={text}
    >
      <span className={styles.measure} aria-hidden="true">
        {text}
      </span>
      <span aria-hidden="true">{displayText}</span>
    </span>
  );
}
