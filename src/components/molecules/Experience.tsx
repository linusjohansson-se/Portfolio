interface Props {
  Role: string;
  Company: string;
  Duration: string;
  Description: string;
}

export default function Experience({
  Role,
  Company,
  Duration,
  Description,
}: Props) {
  return (
    <>
      <div className="font-mono border-l-2 border-border pl-4">
        <div className="mt-4">
          <h1 className="font-mono text-lg font-bold text-text-second">{Role}</h1>
          <h2 className="font-mono text-md font-bold">{Company}</h2>
          <span className="text-text-defused">{Duration}</span>
          <p className="font-mono text-sm text-text-second">{Description}</p>
        </div>
      </div>
    </>
  );
}
