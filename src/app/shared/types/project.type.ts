import { ITechnology } from "./technology.type";

export interface IProject {
  id: string;
  name: string;
  pathImage: string;
  pathAppImage: string;
  pathVideo: string;
  resume: string;
  description: string;
  technologies: ITechnology[];
  site?: string;
  github?: string;
  docs?: string;
}
