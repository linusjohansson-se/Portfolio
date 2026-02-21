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
          subheadline="Printing projects to the terminal since 1999"
        />
        <div className="flex flex-col">
          <div className="flex flex-row w-full mx-auto mt-10 space-x-10">
            <Project
              headline={"SecretsZen"}
              description={
                "A password messaging system built to allow users to securely share sensitive information. It uses end-to-end encryption to ensure that only the intended recipient can access the shared secrets. The system is designed with a focus on user privacy and security, making it an ideal solution for sharing confidential information."
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
                "Wordorder system, built with Clean architecture and selfroled CQRS. Adaptive database design making it easy for usesrs to create custom fields"
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
                "A fun project where I implemented an Elo rating system for competitive gaming. It allows players to track their performance and compare it with others in various games."
              }
              status={<Status status={ProjectStatus.UnderConstruction} />}
              tags={
                <TagsSection
                  tags={
                    <>
                      <Tag text="Python" />
                      <Tag text="FastAPI" />
                      <Tag text="SQLAlchemy 2.0" />
                    </>
                  }
                />
              }
              repositoryLink={"https://github.com/linusjohansson-se/GameElo"}
            />
            <Project
              headline={"FL-Tracker"}
              description={`An application to analyze CS2 game demos and provide detailed statistics and insights. It was made while participating in the CS2 tournament "Företagsligan", that's why it was named FL-Tracker. It provides players with valuable information about their performance, helping them improve their gameplay and strategies.`}
              status={<Status status={ProjectStatus.Scraped} />}
              tags={
                <TagsSection
                  tags={
                    <>
                      <Tag text="C#/.NET" />
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
