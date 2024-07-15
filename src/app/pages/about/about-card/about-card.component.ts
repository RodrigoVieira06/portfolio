import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AboutService } from 'src/app/shared/services/about/about.service';
import { IAbout } from 'src/app/shared/types/about.type';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class AboutCardComponent {
  public entities: IAbout[] = [];
  public entityIndex: number = 0;

  private subscriptions = new Subscription();

  constructor(private aboutService: AboutService) {
  }

  ngOnInit(): void {
    this.getExperiences();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public getExperiences(): void {
    const subscription = this.aboutService.getAboutInformations()
      .subscribe({
        next: (aboutInformation: IAbout[]) => {
          this.entities = aboutInformation;
        }
      });

    this.subscriptions.add(subscription);
  }

  public goToExperience(index: number): void {
    this.entityIndex = index;
  }
}
