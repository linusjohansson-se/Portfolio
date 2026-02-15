import HeaderButton from "../atoms/HeaderButton";
import { VscTerminal } from "react-icons/vsc";
import Navbar from "../molecules/Navbar";
import { FaTerminal } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center sticky top-0 w-full bg-opacity-50 backdrop-blur-sm border-b border-b-2 h-20 px-4">
      <div className="flex items-center space-x-2">
        <FaTerminal className="w-6 h-6" />
        <h1 className="font-mono font-bold">~/Portfolio</h1>
      </div>
      <Navbar />
    </header>
  );
}
