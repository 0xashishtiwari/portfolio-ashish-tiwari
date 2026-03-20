'use client';

import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <div
        className="absolute w-40 h-40 rounded-full 
        bg-blue-400/25 blur-3xl 
        transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 80}px, ${position.y - 80}px)`
        }}
      />
    </div>
  );
};

export default CursorGlow;