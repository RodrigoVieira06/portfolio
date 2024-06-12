import { Component, inject } from '@angular/core';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';
import { IProject } from 'src/app/shared/types/project.type';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  public entities: IProject[];

  private projectsService: ProjectsService = inject(ProjectsService);

  constructor() {
    this.entities = this.projectsService.getProjects();
  }
}
