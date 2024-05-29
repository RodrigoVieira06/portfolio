import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('popup', { static: true }) popup!: ElementRef<HTMLDivElement>;

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
