import { Injectable } from '@angular/core';
import { ITechnology } from '../../types/technology.type';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  private primaryTechnologies: ITechnology[] = [
    {
      name: 'Angular',
      path: 'assets/images/logos/angularLogo.png'
    },
    {
      name: 'React',
      path: 'assets/images/logos/reactLogo.png'
    },
    {
      name: 'NextJS',
      path: 'assets/images/logos/nextJSLogo.png'
    },
    {
      name: 'Typescript',
      path: 'assets/images/logos/typescriptLogo.png'
    },
    {
      name: 'Flutter',
      path: 'assets/images/logos/flutterLogo.png'
    }
  ];

  private secundaryTechnologies: ITechnology[] = [
    {
      name: 'Javascript',
      path: 'assets/images/logos/javascriptLogo.png'
    },
    {
      name: 'Sass',
      path: 'assets/images/logos/sassLogo.png'
    },
    {
      name: 'Bootstrap',
      path: 'assets/images/logos/bootstrapLogo.png'
    },
    {
      name: 'Tailwind',
      path: 'assets/images/logos/tailwindLogo.png'
    },
    {
      name: 'Git',
      path: 'assets/images/logos/gitLogo.png'
    },
    {
      name: 'Github',
      path: 'assets/images/logos/githubLogo.png'
    },
    {
      name: 'Webpack',
      path: 'assets/images/logos/webpackLogo.png'
    },
    {
      name: 'Dart',
      path: 'assets/images/logos/dartLogo.png'
    },
  ];

  public getTechnologies(level: 'primary' | 'secundary'): ITechnology[] {
    const primaryTechnologiesData: ITechnology[] = this.primaryTechnologies;

    const secundaryTechnologiesData: ITechnology[] = this.secundaryTechnologies;

    return level === 'primary' ? primaryTechnologiesData : secundaryTechnologiesData;
  }
}
