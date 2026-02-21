import type React from "react";

interface Props {
  tags: React.ReactNode;
}

export default function TagsSection({ tags }: Props) {
  return <div className="flex flex-row flex-wrap gap-2 pt-2">{tags}</div>;
}
