import type React from "react";
import Card from "../molecules/Card";
import ProjectHeader from "../atoms/ProjectHeader";

interface Props {
  headline: string;
  description: string;
  status: React.ReactNode;
  tags: React.ReactNode[];
  repositoryLink: string;
  demoLink?: string;
}

export default function Project(props: Props) {
  return (
    <>
      <Card
        children={
          <>
            <div>
              <ProjectHeader Headline={props.headline} />
              {props.status}
            </div>
            <p className="text-sm text-text-defused mt-2">
              {props.description}
            </p>
            <div className="border-b-1 border-border py-2" />
          </>
        }
      />
    </>
  );
}
