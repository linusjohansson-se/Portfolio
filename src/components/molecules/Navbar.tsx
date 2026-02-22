import HeaderButton from "../atoms/HeaderButton";

export default function Navbar() {
  return (
    <div className="flex justify-end space-x-1 w-full">
      <HeaderButton
        onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
        children={<h1>~$ home</h1>}
      />
      <HeaderButton
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        children={<h1>~$ projects</h1>}
      />
      <HeaderButton
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        children={<h1>~$ about</h1>}
      />
    </div>
  );
}
