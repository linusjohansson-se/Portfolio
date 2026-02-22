import type React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function HeaderButton({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="font-mono sm:text-sm text-[12px] px-1 sm:px-4 py-2 rounded text-text-second hover:bg-bg-second hover:text-text hover:cursor-pointer text-nowrap"
    >
      {children}
    </button>
  );
}
