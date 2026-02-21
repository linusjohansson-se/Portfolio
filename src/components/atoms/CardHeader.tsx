import type React from "react";

interface Props {
  Header: string;
}

export default function CardHeader({ Header }: Props) {
  return (
    <>
      <div className="flex flex-row">
        <h1 className="font-mono text-lg font-bold text-text">
          {"# " + Header}
        </h1>
      </div>
    </>
  );
}
