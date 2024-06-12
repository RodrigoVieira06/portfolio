import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { TechnologiesService } from 'src/app/shared/services/technologies/technologies.service';
import { ITechnology } from 'src/app/shared/types/technology.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('popup', { static: true }) popup!: ElementRef<HTMLDivElement>;

  public primaryTechnologies: ITechnology[] = [];
  public secundaryTechnologies: ITechnology[] = [];

  private technologiesService: TechnologiesService = inject(TechnologiesService);

  constructor() {
    this.primaryTechnologies = this.technologiesService.getTechnologies('primary');
    this.secundaryTechnologies = this.technologiesService.getTechnologies('secundary');
  }

  onMouseMove(event: MouseEvent): void {
    const imageContainer = event.currentTarget as HTMLElement;
    const rect = imageContainer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    this.popup.nativeElement.style.left = `${mouseX}px`;
    this.popup.nativeElement.style.top = `${mouseY}px`;
    this.popup.nativeElement.style.opacity = '1';
  }

  onMouseLeave(): void {
    this.popup.nativeElement.style.opacity = '0';
  }
}
