import { FaTerminal } from "react-icons/fa";

interface Props {
  Headline: string;
}

export default function ProjectHeader({ Headline }: Props) {
  return (
    <div className="flex flex-row justify-center mb-3 font-mono">
      <div className="bg-green-accent rounded-xl">
        <FaTerminal className="p-3 w-10 h-10" />
      </div>
      <h1 className="pl-3 text-3xl font-bold text-text-second">{Headline}</h1>
    </div>
  );
}
