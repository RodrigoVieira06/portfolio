import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ExperiencesComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ExperiencesModule { }
