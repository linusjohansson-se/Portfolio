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
      <div className="relative font-mono border-l-1 border-border pl-6 pb-6 last:pb-0">
        <div className="absolute -left-[4px] top-[5px] w-2 h-2 rounded-full bg-border border-1 border-border" />
        <h1 className="font-mono text-sm font-bold text-text-second">{Role}</h1>
        <h2 className="font-mono text-sm text-text-defused">{Company} · {Duration}</h2>
        <p className="font-mono text-sm text-text-defused mt-1">{Description}</p>
      </div>
    </>
  );
}
