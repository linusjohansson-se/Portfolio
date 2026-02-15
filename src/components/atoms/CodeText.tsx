interface Props {
    text: string
}

export default function CodeText({text}: Props) {
  return (
    <h1 className="font-mono text-4xl sm:text-6xl font-bold text-[#00ff41] mb-4">
      {text}
    </h1>
  );
}
