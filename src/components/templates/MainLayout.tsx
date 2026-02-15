import type React from "react";
import Header from "../organisms/Header";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-bg border-border border-4">
        <Header />
        {children}
      </div>
    </>
  );
}
