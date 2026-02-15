import HeaderButton from "../atoms/HeaderButton";
import { ArrowRightIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import Navbar from "../molecules/Navbar";

export default function Header() {
  return (
    <header className="flex items-center sticky top-0 w-full bg-opacity-50 backdrop-blur-sm border-b border-b-2 h-16 px-4">
      <div>
        <h1>{">"}_ ~/Portfolio</h1>
      </div>
      <Navbar />
    </header>
  );
}
