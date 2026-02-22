export const ProjectStatus = {
  InProgess: "In-progress",
  Live: "Live",
  Scraped: "Scraped",
} as const;

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
