import CardHeader from "../atoms/CardHeader";
import SectionHeader from "../atoms/SectionHeader";
import Card from "../molecules/Card";
import Experience from "../molecules/Experience";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col flex-1  justify-center min-h-screen max-w-full">
        <SectionHeader
          headline="cat aboutme.md"
          subheadline="Loading information about me..."
        />
        <div className="w-full mx-auto mt-6 sm:mt-10 space-y-6 sm:space-y-10">
          <Card
            children={
              <>
                <div className="flex flex-col space-y-4">
                  <CardHeader Header={"About Me"} />
                  <div>
                    <p className="font-mono text-text-defused">
                      I'm a developer based in Sweden with a background that
                      spans IT infrastructure, networking, and software
                      development. I started out as an IT technician working
                      across all domains, from basic support to complex
                      deliveries, before moving into infrastructure and hosting
                      where I managed VMware environments, network upgrades, and
                      data center redundancy. That hands-on foundation gave me a
                      deep appreciation for how systems actually work under the
                      hood.
                    </p>
                    <p className="font-mono text-text-defused mt-4">
                      Today I work as a developer and team lead, building
                      backend services, APIs, and automated workflows. I care
                      about clean, maintainable architecture and most of my
                      projects lean on Clean Architecture and CQRS patterns.
                      Outside of work I tinker with side projects, have an
                      interest in security, and spend time on cars and gaming.
                    </p>
                  </div>
                </div>
              </>
            }
          />
          <Card
            children={
              <>
                <div className="flex flex-col space-y-4">
                  <CardHeader Header={"Experience"} />
                  <div>
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
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
}
