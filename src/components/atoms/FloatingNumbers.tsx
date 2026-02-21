import { useMemo } from "react";

const FloatingBinary = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      char: Math.random() > 0.5 ? "1" : "0",
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      fontSize: `${12 + Math.random() * 16}px`,
      duration: `${20 + Math.random() * 20}s`,
      delay: `${-Math.random() * 20}s`,
      opacity: 0.04 + Math.random() * 0.06,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute font-mono text-primary"
          style={{
            left: p.left,
            top: p.top,
            fontSize: p.fontSize,
            opacity: p.opacity,
            animation: `float-slow ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
};

export default FloatingBinary;