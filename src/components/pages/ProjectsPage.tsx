import SectionHeader from "../atoms/SectionHeader";
import Project from "../organisms/Project";
import Tag from "../atoms/Tag";
import TagsSection from "../molecules/TagsSection";
import Status from "../atoms/Status";
import { ProjectStatus } from "../../types/projectStatus";

export default function ProjectsPage() {
  return (
    <>
      <div className="flex flex-col flex-1  justify-center min-h-screen max-w-full">
        <SectionHeader
          headline="cat projects.md"
          subheadline="// TODO: finish all of these"
        />
        <div className="flex flex-col">
          <div className="flex flex-row w-full mx-auto mt-10 space-x-10">
            <Project
              headline={"SecretsZen"}
              description={
                "Inspired by pwpush.com. Shareable links for sensitive information that self-destruct after a set number of views or time period. Built with Clean Architecture, C#/.NET, Entity Framework, and Dapper."
              }
              status={<Status status={ProjectStatus.UnderConstruction} />}
              tags={
                <TagsSection
                  tags={
                    <>
                      <Tag text="C#/.NET" />
                      <Tag text="Entity Framework" />
                      <Tag text="Clean Architecture" />
                      <Tag text="CQRS" />
                      <Tag text="MediatR" />
                      <Tag text="Dapper" />
                      <Tag text="RestAPI" />
                    </>
                  }
                />
              }
              repositoryLink={"https://github.com/linusjohansson-se/SecretsZen"}
            />
            <Project
              headline={"Nileto"}
              description={
                "A work order management system built with Clean Architecture and a hand-rolled CQRS implementation. The standout feature is its adaptive database design, where users can define custom fields that are dynamically added as real columns via ALTER TABLE, giving teams full flexibility while preserving query performance."
              }
              status={<Status status={ProjectStatus.UnderConstruction} />}
              tags={
                <TagsSection
                  tags={
                    <>
                      <Tag text="C#/.NET" />
                      <Tag text="Entity Framework" />
                      <Tag text="Clean Architecture" />
                      <Tag text="CQRS" />
                      <Tag text="RestAPI" />
                    </>
                  }
                />
              }
              repositoryLink={"https://github.com/linusjohansson-se/Nileto"}
            />
          </div>
          <div className="flex flex-row w-full mx-auto mt-10 space-x-10">
            <Project
              headline={"GameElo"}
              description={
                "A fun project where I built a REST API for tracking competitive game results and Elo ratings. Records match results, automatically recalculates ratings using the standard Elo formula, and exposes a clean HTTP API for client consumption."
              }
              status={<Status status={ProjectStatus.UnderConstruction} />}
              tags={
                <TagsSection
                  tags={
                    <>
                      <Tag text="Python" />
                      <Tag text="FastAPI" />
                      <Tag text="SQLModel" />
                      <Tag text="SQLite" />
                      <Tag text="Uvicorn" />
                      <Tag text="REST API" />
                    </>
                  }
                />
              }
              repositoryLink={"https://github.com/linusjohansson-se/GameElo"}
            />
            <Project
              headline={"FL-Tracker"}
              description={`A tool I built while competing in the Swedish CS2 tournament "Företagsligan". Parses demo files to extract player stats like kills, deaths, ADR, and clutch rates, giving players insights to improve their gameplay.`}
              status={<Status status={ProjectStatus.Scraped} />}
              tags={
                <TagsSection
                  tags={
                    <>
                      <Tag text="C#/.NET" />
                      <Tag text="Clean Architecture" />
                      <Tag text="CQRS" />
                      <Tag text="MediatR" />
                      <Tag text="Entity Framework" />
                      <Tag text="Quartz" />
                    </>
                  }
                />
              }
              repositoryLink={"https://github.com/linusjohansson-se/FL-Tracker"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
