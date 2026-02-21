import { PiGithubLogo } from "react-icons/pi";

interface Props {
  onClick: () => void;
}

export default function GithubButton({ onClick }: Props) {
    return (
        <button
      onClick={onClick}
      className="w-fit flex items-center justify-center p-2 rounded hover:bg-green-accent space-x-2 py-2 font-mono font-bold hover:cursor-pointer"
    >
      <PiGithubLogo className="w-5 h-5" />
      <span>Code</span>
    </button>
    )
}