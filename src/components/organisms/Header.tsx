import HeaderButton from "../atoms/HeaderButton";
import { ArrowRightIcon, CommandLineIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-opacity-50 backdrop-blur-sm border-b border-b-2 h-16">
      <div>
        <h1>{">"}_ ~/Portfolio</h1>
      </div>
      <div className="flex items-center space-x-1">
        <HeaderButton
          children={
            <>
              <h1>~$ home</h1>
            </>
          }
        />
        <HeaderButton
          children={
            <>
              <h1>~$ about</h1>
            </>
          }
        />
        <HeaderButton
          children={
            <>
              <h1>~$ projects</h1>
            </>
          }
        />
        <HeaderButton
          children={
            <>
              <h1>~$ contact</h1>
            </>
          }
        />
      </div>
    </header>
  );
}
