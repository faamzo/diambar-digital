import { useEffect, useRef, type RefObject } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export function useCursorAnimation<T extends HTMLElement>(
  elementRef: RefObject<T | null>,
  animationIntensity: number = 1
) {
  const cursorPos = useRef<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };

      if (elementRef.current) {
        const element = elementRef.current;
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - elementCenterX) * 0.05 * animationIntensity;
        const deltaY = (e.clientY - elementCenterY) * 0.05 * animationIntensity;

        element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (elementRef.current) {
        elementRef.current.style.transform = "translate(0px, 0px)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animationIntensity, elementRef]);
}
