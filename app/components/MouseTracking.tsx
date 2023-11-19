"use client";
import { useEffect, useState } from "react";

const MouseTracking = () => {
  const [sparkles, setSparkles] = useState<
    { x: number; y: number; color: string }[]
  >([]);

  const handleMouseMove = (event: MouseEvent) => {
    const rainbowColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    setSparkles([{ x: event.clientX, y: event.clientY, color: rainbowColor }]);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // 2秒後にエフェクトを消す
    const timeoutId = setTimeout(() => {
      setSparkles([]);
    }, 2000);

    // cleanup関数でタイマーをクリアする
    return () => {
      clearTimeout(timeoutId);
    };
  }, [sparkles]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        zIndex: 9999,
      }}
    >
      {sparkles.map((sparkle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: sparkle.color,
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            animation: "sparkle 0.5s ease-out",
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default MouseTracking;
