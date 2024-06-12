import { ITechnology } from "./technology.type";

export interface IProject {
  id: string;
  name: string;
  image: string;
  description: string;
  technologies: ITechnology[];
  site?: string;
  github?: string;
  docs?: string;
}
