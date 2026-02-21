interface Props {
  text: string;
}

export default function Tag({ text }: Props) {
    return (
        <>
        <div className="flex border-border border-1 bg-dark-green-accent text-text-dark rounded px-3 py-1 space-x-1 space-y-1 text-xs font-mono">
          {text}
        </div>
        </>
    )
}