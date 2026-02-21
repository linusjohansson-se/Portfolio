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
      <div className="font-mono border-l-1 border-border pl-4">
        <div className="mt-4">
          <h1 className="font-mono text-lg font-bold text-text-second">{Role}</h1>
          <h2 className="font-mono text-sm text-text-defused">{Company} · {Duration}</h2>
          <p className="font-mono text-sm text-text-second">{Description}</p>
        </div>
      </div>
    </>
  );
}
