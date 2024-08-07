import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TechnologiesService } from 'src/app/shared/services/technologies/technologies.service';
import { ITechnology, ITechnologyLevels } from 'src/app/shared/types/technology.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('popup', { static: true }) popup!: ElementRef<HTMLDivElement>;

  public primaryTechnologies: ITechnology[] = [];
  public secondaryTechnologies: ITechnology[] = [];

  private subscriptions = new Subscription();

  public showGreetings: boolean = false;
  public showTitle: boolean = false;
  public showAll: boolean = false;

  constructor(private technologiesService: TechnologiesService) { }

  ngOnInit(): void {
    this.getTechnologies();
    this.animateIntro();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public getTechnologies() {
    const subscription = this.technologiesService.getTechnologies()
      .subscribe({
        next: (technologies: ITechnologyLevels) => {
          this.primaryTechnologies = technologies.primary;
          this.secondaryTechnologies = technologies.secondary
        }
      });

    this.subscriptions.add(subscription);
  }

  public onMouseMove(event: MouseEvent): void {
    const imageContainer = event.currentTarget as HTMLElement;
    const rect = imageContainer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    this.popup.nativeElement.style.left = `${mouseX}px`;
    this.popup.nativeElement.style.top = `${mouseY}px`;
    this.popup.nativeElement.style.opacity = '1';
  }

  public onMouseLeave(): void {
    this.popup.nativeElement.style.opacity = '0';
  }

  private animateIntro(): void {
    setTimeout(() => {
      this.showGreetings = true;
      setTimeout(() => {
        this.showTitle = true;
        setTimeout(() => {
          this.showAll = true;
        }, 1000);
      }, 2000);
    }, 500);
  }
}
