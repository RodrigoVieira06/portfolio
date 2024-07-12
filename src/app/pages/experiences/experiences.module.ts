import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceCardComponent } from './experience-card/experience-card.component';



@NgModule({
  declarations: [
    ExperiencesComponent,
    ExperienceCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ExperiencesModule { }
