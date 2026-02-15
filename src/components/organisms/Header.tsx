import HeaderButton from "../atoms/HeaderButton";
import { ArrowRightIcon, CommandLineIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className="">
      <div>
        <CommandLineIcon className="w-5 h-5" />
        <h1>~$ ./Portfolio</h1>
      </div>
      <HeaderButton
        children={
          <>
            <h1>~$ cd home</h1>
          </>
        }
      />
      <HeaderButton
        children={
          <>
            <h1>~$ cd about</h1>
          </>
        }
      />
      <HeaderButton
        children={
          <>
            <h1>~$ cd projects</h1>
          </>
        }
      />
      <HeaderButton
        children={
          <>
            <h1>~$ cd contact</h1>
          </>
        }
      />
    </div>
  );
}
