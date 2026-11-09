"use client";

import { useEffect } from "react";

/**
 * High-performance deferred loader for Gumroad overlay script.
 * Prevents Gumroad from loading 26 KiB of unused CSS and custom webfonts during
 * initial page load / Lighthouse synthetic audits, while guaranteeing instant
 * activation the moment a real user interacts (scrolls, touches, or hovers a buy button).
 */
export function GumroadOverlay() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let loaded = false;

    const loadGumroadScript = () => {
      if (loaded || document.getElementById("gumroad-script-loader")) return;
      loaded = true;

      // Clean up event listeners immediately
      window.removeEventListener("scroll", loadGumroadScript);
      window.removeEventListener("touchstart", loadGumroadScript);
      window.removeEventListener("pointerdown", loadGumroadScript);
      window.removeEventListener("keydown", loadGumroadScript);
      window.removeEventListener("mousemove", loadGumroadScript);

      const script = document.createElement("script");
      script.id = "gumroad-script-loader";
      script.src = "https://gumroad.com/js/gumroad.js";
      script.async = true;
      document.body.appendChild(script);
    };

    // User interactions that trigger on-demand loading
    window.addEventListener("scroll", loadGumroadScript, { once: true, passive: true });
    window.addEventListener("touchstart", loadGumroadScript, { once: true, passive: true });
    window.addEventListener("pointerdown", loadGumroadScript, { once: true, passive: true });
    window.addEventListener("keydown", loadGumroadScript, { once: true, passive: true });
    window.addEventListener("mousemove", loadGumroadScript, { once: true, passive: true });

    // Hover or focus on buy buttons loads script immediately
    const bindButtons = () => {
      const buttons = document.querySelectorAll(".gumroad-button, [data-gumroad-single-product]");
      buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", loadGumroadScript, { once: true, passive: true });
        btn.addEventListener("focus", loadGumroadScript, { once: true, passive: true });
        btn.addEventListener("click", loadGumroadScript, { once: true });
      });
    };

    bindButtons();
    // Observe DOM in case product cards or modals are rendered dynamically
    const observer = new MutationObserver(bindButtons);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", loadGumroadScript);
      window.removeEventListener("touchstart", loadGumroadScript);
      window.removeEventListener("pointerdown", loadGumroadScript);
      window.removeEventListener("keydown", loadGumroadScript);
      window.removeEventListener("mousemove", loadGumroadScript);
      observer.disconnect();
    };
  }, []);

  return null;
}
