import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCardComponent } from './components/project-card/project-card.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ProjectsModule { }
