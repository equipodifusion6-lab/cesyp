"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 280;

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      className={`scroll-to-top${isVisible ? " scroll-to-top--visible" : ""}`}
      onClick={handleClick}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
