import HeaderButton from "../atoms/HeaderButton";

export default function Navbar() {
  return (
    <div className="flex justify-end space-x-1 w-full">
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
            <h1>~$ projects</h1>
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
    </div>
  );
}
