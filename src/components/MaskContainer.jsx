// src/components/MaskContainer.jsx
import { useState, useEffect, useRef } from "react";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const containerRef = useRef(null);

  const updateMousePosition = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener("mousemove", updateMousePosition);
      return () => {
        ref.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, []);

  const maskSize = isHovered ? revealSize : size;

  return (
    <div
      ref={containerRef}
      className={`relative transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base layer */}
      <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-gray-800 text-white rounded-lg">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg" />
        
        {/* Mask layer */}
        <div
          className="absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg transition-all duration-200 ease-out"
          style={{
            maskImage: `radial-gradient(circle at ${mousePosition.x || 50}px ${mousePosition.y || 50}px, black ${maskSize/2}px, transparent ${maskSize/2 + 1}px)`,
            WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x || 50}px ${mousePosition.y || 50}px, black ${maskSize/2}px, transparent ${maskSize/2 + 1}px)`,
          }}
        >
          <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
          <div className="relative z-20 w-full cursor-pointer text-center text-sm font-semibold px-4">
            {revealText}
          </div>
        </div>
      </div>

      {/* Content layer */}
      <div className="relative z-20 w-full p-4">
        {children}
      </div>
    </div>
  );
};