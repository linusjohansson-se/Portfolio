import CardHeader from "../atoms/CardHeader";
import SectionHeader from "../atoms/SectionHeader";
import Card from "../molecules/Card";
import Experience from "../molecules/Experience";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center min-h-screen max-w-full">
        <SectionHeader
          headline="About Me"
          subheadline="Loading information about me..."
        />
        <div className="w-full mx-auto mt-10">
          <Card
            children={
              <>
              <CardHeader Icon = {<div className="w-6 h-6 mr-2 text-text-second">Icon</div>} Header={"About Me"} />
                
              </>
            }
          />
          <Card
            children={
              <>
              <CardHeader Icon = {<div className="w-6 h-6 mr-2 text-text-second">Icon</div>} Header={"Skills"} />
                
              </>
            }
          />
          <Card
            children={
              <>
              <CardHeader Icon = {<div className="w-6 h-6 mr-2 text-text-second">Icon</div>} Header={"Experience"} />
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
