export type Project = {
  title: string;
  description: string;
  primaryTech: string[];
  secondaryTech: string[];
};

export type ProjectCardProps = {
  project: Project;
};

export type TechPillsProps = {
  visibleTech: string[];
  hiddenTech: string[];
};
