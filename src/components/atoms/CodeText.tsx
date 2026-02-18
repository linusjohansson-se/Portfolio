import { useEffect, useState } from "react";

interface Props {
  text: string;
}

export default function CodeText({ text }: Props) {
  const [textToPrint, setTextToPrint] = useState("");
  const [printing, setPrinting] = useState(false);
  const [cursor, setCursor] = useState("\u2588\n");

  useEffect(() => {
    setPrinting(true);
    setTextToPrint("");
    let i = 0;

    const id = setInterval(() => {
      if (i >= text.length) {
        clearInterval(id);
        setPrinting(false);
        return;
      }
      setTextToPrint(text.slice(0, i + 1));
      i++;
    }, 50);

    return () => clearInterval(id);
  }, [text]);

  useEffect(() => {
    const id = setInterval(() => {
      if (printing) {
        setCursor("\u2588\n");
      } else {
        setCursor((prev) => (prev === "\u200B" ? "\u2588\n" : "\u200B"));
      }
    }, 500);

    return () => clearInterval(id);
  }, [printing]);

  return (
    <h1 className="font-mono text-4xl sm:text-6xl font-bold text-[#00ff41] mb-4 whitespace-nowrap">
      {textToPrint}<span className="inline-block w-[1ch]">{cursor}</span>
    </h1>
  );
}
