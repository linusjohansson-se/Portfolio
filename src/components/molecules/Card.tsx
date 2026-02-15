import type React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="p-6 rounded-lg border-card-border bg-card-bg">
      {children}
    </div>
  );
}
