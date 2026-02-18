import { useEffect, useState } from "react";

interface Props {
    text: string
}

export default function CodeText({text}: Props) {
  const [textToPrint, setTextToPrint] = useState("")
  const [printing, setPrinting] = useState(false)
  const [writeBlock, setWriteBlock] = useState("\u2588\n")

  useEffect(() => {
    setPrinting(true)
    setTextToPrint("");
    let i = 0;

    const id = setInterval(() => {
      if (i >= text.length) {
        clearInterval(id);
        return;
      }
      setTextToPrint(text.slice(0, i + 1));
      i++;
    }, 50);

    return () => clearInterval(id);
  }, [text])

  useEffect(() => {
    if(printing) {
      setWriteBlock("\u2588\n")
    }
    else {

    }
  })

  return (
    <h1 className="font-mono text-4xl sm:text-6xl font-bold text-[#00ff41] mb-4">
      {textToPrint + writeBlock}
    </h1>
  );
}
