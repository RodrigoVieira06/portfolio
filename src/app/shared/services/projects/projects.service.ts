import { Injectable } from '@angular/core';
import { IProject } from '../../types/project.type';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: IProject[] = [
    {
      id: '1',
      name: 'LIPCAT',
      description: `
        Um sistema de uma laboratório de química da UFRJ que contém uma landing page e um sistema intranet, que
        possibilita alunos e professores a gerenciarem o conteúdo presente nas telas visíveis para o publico geral,
        além de controle disponibilidade de conteúdo interno.
      `,
      image: 'assets/images/projects/lipcat.png',
      technologies: [
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
      ],
      site: 'https://lipcat.com.br/pt'
    },
    {
      id: '2',
      name: 'Meu dinheiro',
      description: `
        Um aplicativo mobile que tem como objetivo auxiliar o gerenciamento financeiro pessoal, possibilitando o
        cadastro de entrada e saída de dinheiro, personalização de categorias, adição de cartões e visualização de
        gráficos.
      `,
      image: 'assets/images/projects/meudinheiro.png',
      technologies: [
        {
          name: 'Flutter',
          path: 'assets/images/logos/flutterLogo.png'
        },
        {
          name: 'Dart',
          path: 'assets/images/logos/dartLogo.png'
        }
      ],
      github: 'https://github.com/RodrigoVieira06/projeto-controle-financeiro',
      docs: 'https://docs.google.com/document/d/156lhCn88hBK34-2mN0VHaaMuc3f1FoCh/'
    },
  ];

  public getProjects(): IProject[] {
    return this.projects;
  }
}
