import CodeText from "../atoms/CodeText";
import Card from "../molecules/Card";

export default function ProfileCard() {
  return (
    <>
      <div className="w-full mx-auto mt-10">
        <Card
          children={
            <>
              <CodeText text="Welcome to my portfolio" />
              <div className="flex flex-col font-mono font-bold text-xs sm:text-lg">
                <div>
                  <span className="text-syntax-keyword">var </span>
                  <span className="text-text-second">person = </span>
                  <span className="text-syntax-keyword">new </span>
                  <span className="text-syntax-type">Person</span>
                </div>
                <span className="text-text-second">{"{"}</span>
                <div className="pl-2 sm:pl-4">
                  <span className="text-text-second">Name</span>
                  <span className="text-text-second"> = </span>
                  <span className="text-syntax-prop">"Linus Johansson"</span>
                  <span className="text-text-second">,</span>
                </div>
                <div className="pl-2 sm:pl-4">
                  <span className="text-text-second">Role</span>
                  <span className="text-text-second"> = </span>
                  <span className="text-syntax-prop">"Developer"</span>
                  <span className="text-text-second">,</span>
                </div>
                <div className="pl-2 sm:pl-4">
                  <span className="text-text-second">Languages</span>
                  <span className="text-text-second"> = </span>
                  <span className="text-text-second">[</span>
                  <span className="text-syntax-prop">"C#"</span>
                  <span className="text-text-second">, </span>
                  <span className="text-syntax-prop">"Python"</span>
                  <span className="text-text-second">, </span>
                  <span className="text-syntax-prop">"TypeScript"</span>
                  <span className="text-text-second">],</span>
                </div>
                <div className="pl-2 sm:pl-4">
                  <span className="text-text-second">Interests</span>
                  <span className="text-text-second"> = </span>
                  <span className="text-text-second">[</span>
                  <span className="text-syntax-prop">"Cars"</span>
                  <span className="text-text-second">, </span>
                  <span className="text-syntax-prop">"Gaming"</span>
                  <span className="text-text-second">, </span>
                  <span className="text-syntax-prop">"Linux"</span>
                  <span className="text-text-second">, </span>
                  <span className="text-syntax-prop">"Networking"</span>
                  <span className="text-text-second">, </span>
                  <span className="text-syntax-prop">"Security"</span>
                  <span className="text-text-second">]</span>
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
