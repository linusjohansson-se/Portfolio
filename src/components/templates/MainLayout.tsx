import type React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <div className="min-w-screen min-h-screen flex flex-col bg-bg border-border border-4">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
