export const ProjectStatus = {
  UnderConstruction: "Under construction",
  Live: "Live",
  Scraped: "Scraped",
} as const;

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
