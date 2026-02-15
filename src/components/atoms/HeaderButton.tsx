import type React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function HeaderButton({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center space-x-2 px-6 py-3 text-text-second hover:bg-bg-second hover:text-text transition-colors rounded font-mono font-bold"
    >
      {children}
    </button>
  );
}
