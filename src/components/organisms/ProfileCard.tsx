import CodeText from "../atoms/CodeText";
import Card from "../molecules/Card";

export default function ProfileCard() {
  return (
    <>
      <div className="w-full max-w-[1100px] mx-auto mt-10">
        <Card
          children={
            <>
              <CodeText text="Welcome to my portfolio" />
              <div className="flex flex-col font-mono font-bold text-lg">
                <div>
                  <span className="text-syntax-keyword">var </span>
                  <span className="text-text-second">person = </span>
                  <span className="text-syntax-keyword">new </span>
                  <span className="text-syntax-type">Person</span>
                </div>
                <span className="text-text-second">{"{"}</span>
                <div className="pl-4">
                  <span className="text-text-second">Name</span>
                  <span className="text-text-second"> = </span>
                  <span className="text-syntax-prop">"Linus Johansson"</span>
                  <span className="text-text-second">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-text-second">Speciality</span>
                  <span className="text-text-second"> = </span>
                  <span className="text-syntax-prop">"Tech"</span>
                  <span className="text-text-second">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-text-second">Role</span>
                  <span className="text-text-second"> = </span>
                  <span className="text-syntax-prop">"Developer"</span>
                </div>
                <span className="text-text-second">{"};"}</span>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
