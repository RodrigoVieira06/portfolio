import { ITechnologyLevels } from "./technology.type";

export type IExperience = {
  id: number;
  role: string;
  period: string;
  enterprisePathLogo: string;
  enterprise: string;
  technologies: ITechnologyLevels;
  description: string;
}
