import type React from "react";
import Card from "../molecules/Card";
import ProjectHeader from "../atoms/ProjectHeader";
import GithubButton from "../atoms/GithubButton";
import DemoButton from "../atoms/DemoButton";

interface Props {
  headline: string;
  description: string;
  status: React.ReactNode;
  tags: React.ReactNode;
  repositoryLink: string;
  demoLink?: string;
}

export default function Project(props: Props) {
  return (
    <>
      <Card
        children={
          <>
            <div className="flex flex-col h-full">
              <div className="flex flex-row w-full">
                <ProjectHeader Headline={props.headline} />
                {props.status}
              </div>
              <p className="text-sm text-text-defused mt-2 h-full">
                {props.description}
              </p>
              {props.tags}
              <div className="border-b-1 border-border py-2" />
              <div className="flex flex-row mt-3 space-x-4">
                <GithubButton onClick={() => window.open(props.repositoryLink, "_blank")} />
                {props.demoLink && <DemoButton onClick={() => window.open(props.demoLink, "_blank")} />}
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
