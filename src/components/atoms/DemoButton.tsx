import { MdOpenInNew } from "react-icons/md";

interface Props {
  onClick: () => void;
}

export default function DemoButton({ onClick }: Props) {
    return (
        <button
      onClick={onClick}
      className="w-fit flex items-center justify-center p-2 rounded hover:bg-green-accent space-x-2 py-2 font-mono font-bold hover:cursor-pointer"
    >
      <MdOpenInNew className="w-5 h-5" />
      <span>Live</span>
    </button>
    )
}