import { ProjectStatus } from "../../types/projectStatus";

interface Props {
  status: ProjectStatus;
}

export default function Status({ status }: Props) {
  let bg: string;
  let text: string;
  let border: string;

  switch (status) {
    case ProjectStatus.Live:
      bg = "bg-dark-green-accent";
      text = "text-text-green-accent";
      border = "border-border-green-accent";
      break;
    case ProjectStatus.Scraped:
      bg = "bg-dark-gray-accent";
      text = "text-text-gray-accent";
      border = "border-border-gray-accent";
      break;
    case ProjectStatus.UnderConstruction:
      bg = "bg-dark-yellow-accent";
      text = "text-text-yellow-accent";
      border = "border-border-yellow-accent";
      break;
    default:
      bg = "";
      text = "";
      border = "";
  }

  return (
    <div className={`${bg} ${border} border px-3 py-1 rounded`}>
      <h1 className={`font-mono text-sm ${text}`}>{status}</h1>
    </div>
  );
}
