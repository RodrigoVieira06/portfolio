export interface IProject {
  id: string;
  name: string;
  image: string;
  description: string;
  technologies: Array<string>;
  site?: string;
  github?: string;
  docs?: string;
}
