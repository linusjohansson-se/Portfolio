import type React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-fit flex items-center justify-center space-x-2 px-6 py-3 border-1 border-border text-text hover:bg-text hover:text-bg transition-colors rounded font-mono font-bold hover:cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
