import type React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import FloatingNumbers from "../atoms/FloatingNumbers";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <FloatingNumbers />
      <div className="relative z-10 w-full min-h-screen flex flex-col border-border border-4 max-w-full">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
