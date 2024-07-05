import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';
import { IProject } from 'src/app/shared/types/project.type';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  public entities: IProject[] = [];

  private subscriptions = new Subscription();

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.getProjects();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public getProjects() {
    const subscription = this.projectsService.getProjects()
      .subscribe({
        next: (projects: IProject[]) => {
          this.entities = projects;
        }
      });

    this.subscriptions.add(subscription);
  }
}
