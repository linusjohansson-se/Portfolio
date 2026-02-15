import { useMemo } from "react";

const NUM_COUNT = 30;

function generateNumbers() {
  return Array.from({ length: NUM_COUNT }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    fontSize: 12 + Math.random() * 16,
    duration: 20 + Math.random() * 20,
    direction: Math.random() > 0.5 ? "alternate" : "alternate-reverse" as const,
    value: Math.random() > 0.5 ? "0" : "1",
  }));
}

export default function FloatingNumbers() {
  const numbers = useMemo(generateNumbers, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {numbers.map((n, i) => (
        <span
          key={i}
          className="absolute text-white/10 font-mono"
          style={{
            left: `${n.left}%`,
            top: `${n.top}%`,
            fontSize: `${n.fontSize}px`,
            textShadow: "0px 0px 31px #00ff41",
            animation: `floatSlow ${n.duration}s linear infinite`,
            animationDirection: n.direction,
          }}
        >
          {n.value}
        </span>
      ))}
    </div>
  );
}
