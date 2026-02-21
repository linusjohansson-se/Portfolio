import type React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="w-full p-6 rounded-lg border-1 hover:border-border border-card-border bg-card-bg shadow-md shadow-card-border">
      {children}
    </div>
  );
}
