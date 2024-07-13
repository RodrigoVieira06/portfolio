import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperiencesService } from 'src/app/shared/services/experiences/experiences.service';
import { IExperience } from 'src/app/shared/types/experience.type';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ExperiencesComponent {

}
