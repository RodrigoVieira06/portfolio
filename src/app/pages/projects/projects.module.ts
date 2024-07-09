import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ModalComponent } from './components/modal-component/modal.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ProjectsModule { }
