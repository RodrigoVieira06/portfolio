import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AboutComponent,
    AboutCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class AboutModule { }
