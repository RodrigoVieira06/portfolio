import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';
import { IProject } from 'src/app/shared/types/project.type';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
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

  public getProjects(): void {
    const subscription = this.projectsService.getProjects()
      .subscribe({
        next: (projects: IProject[]) => {
          this.entities = projects;
        }
      });

    this.subscriptions.add(subscription);
  }
}
