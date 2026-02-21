import CardHeader from "../atoms/CardHeader";
import SectionHeader from "../atoms/SectionHeader";
import Card from "../molecules/Card";
import Experience from "../molecules/Experience";
import profileImg from "../../assets/profile.png";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col flex-1  justify-center min-h-screen max-w-full">
        <SectionHeader
          headline="cat aboutme.md"
          subheadline="Loading information about me..."
        />
        <div className="w-full mx-auto mt-10 py-4 space-y-10">
          <div className="flex flex-row w-full justify-center space-x-10">
            <div className="w-full">
              <Card
                children={
                  <>
                    <CardHeader Header={"About Me"} />
                    <p className="font-mono text-text-second">
                      
                    </p>
                  </>
                }
              />
            </div>
            <img
              src={profileImg}
              alt="Profile Picture"
              className="h-100"
              style={{
                filter: "drop-shadow(0 0 8px #00ff41)",
                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              }}
            />
          </div>
          <Card
            children={
              <>
                <CardHeader Header={"Experience"} />
                <Experience
                  Role={"DEVELOPER & TEAM LEAD"}
                  Company={"evolvit Solutions AB"}
                  Duration={"June 2024 - current"}
                  Description={
                    "Responsible for the development of automated billing workflows as well as order and invoice management for internal needs and the reseller channel. Develops and drives system design and architecture together with the team. Building APIs, integrations and backendservices."
                  }
                />
                <Experience
                  Role={"INFRA & HOSTING"}
                  Company={"evolvit Solutions AB"}
                  Duration={"April 2022 - June 2024"}
                  Description={
                    "Setup and maintenance of the hosting environment (VMware, Hyper-V). Also managed, maintained, and upgraded the network infrastructure and ISP services. Primary role was to upgrade the network and increase redundancy for the company’s data center and ISP service."
                  }
                />
                <Experience
                  Role={"IT-TECHNICIAN"}
                  Company={"evolvit Solutions AB"}
                  Duration={"August 2019 - December 2023"}
                  Description={
                    "Installation, operation, and support across all IT domains, primarily for small and medium-sized businesses (SMBs). Ranged from basic support cases to complex IT deliveries of varying scope."
                  }
                />
                <Experience
                  Role={"ONSITE-TECHNICIAN"}
                  Company={"evolvit Solutions AB"}
                  Duration={"April 2019 - August 2019"}
                  Description={
                    "Stationed on-site at the customer to manage the local IT environment. General troubleshooting of day-to-day IT issues in a production environment."
                  }
                />
              </>
            }
          />
        </div>
      </div>
    </>
  );
}
