import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperiencesService } from 'src/app/shared/services/experiences/experiences.service';
import { IExperience } from 'src/app/shared/types/experience.type';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ExperienceCardComponent implements OnInit {
  public entities: IExperience[] = [];
  public entityIndex: number = 0;

  private subscriptions = new Subscription();

  constructor(private experiencesService: ExperiencesService) {
  }

  ngOnInit(): void {
    this.getExperiences();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public getExperiences(): void {
    const subscription = this.experiencesService.getExperiences()
      .subscribe({
        next: (experiences: IExperience[]) => {
          this.entities = experiences;
        }
      });

    this.subscriptions.add(subscription);
  }

  public goToExperience(index: number): void {
    this.entityIndex = index;
  }

}
