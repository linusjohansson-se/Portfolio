import CodeText from "../atoms/CodeText";
import Card from "../molecules/Card";

export default function ProfileCard() {
  return (
    <>
      <div className="flex">
        <Card
          children={
            <>
              <CodeText text="Welcome to my portfolio"/>
              <div className="flex flex-col ">
                <span>{"var person = new Person {"}</span>
                <span>Name: "Linus Johansson"</span>
                <span>Speciality: "Tech"</span>
                <span>Role: "Developer"</span>
                <span>{"};"}</span>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
