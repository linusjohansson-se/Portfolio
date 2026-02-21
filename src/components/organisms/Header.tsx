import Navbar from "../molecules/Navbar";
import { FaTerminal } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center sticky top-0 w-full bg-opacity-50 backdrop-blur-sm border-b border-b-1 h-16 px-4">
      <div className="flex flex-row w-300 items-center justify-between max-w-full mx-auto">
        <div className="flex items-center space-x-2">
          <FaTerminal className="w-5 h-5" />
          <h1 className="font-mono font-bold text-sm text-text-second">ontheline.se</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
