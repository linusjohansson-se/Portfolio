import type React from "react";

interface Props {
  Header: string;
  Icon: React.ReactNode;
}

export default function CardHeader({ Header, Icon }: Props) {
  return (
    <>
      <div className="flex flex-row">
        {Icon}
        <h1 className="font-mono text-lg font-bold text-text">
          {Header}
        </h1>
      </div>
    </>
  );
}
