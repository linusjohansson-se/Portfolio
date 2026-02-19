interface Props {
    headline: string;
    subheadline?: string;
}

export default function SectionHeader({ headline, subheadline }: Props) {
  return (
    <div className="flex flex-col justify-center mb-8 border-l-4 border-border pl-4 font-mono">
      <div className="flex flex-row">
        <h2 className="text-3xl font-bold pr-4">$</h2>
        <h2 className="text-3xl font-bold">{headline}</h2>
        </div>
      {subheadline && <p className="text-lg text-text-defused mt-2">{subheadline}</p>}
    </div>
  );
}