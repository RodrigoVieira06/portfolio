import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IProject } from 'src/app/shared/types/project.type';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit, OnDestroy {
  @Input() public entity!: IProject;
  public showModal: boolean = false;

  ngOnInit(): void {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  public handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.showModal) {
      this.toggleModal();
    }
  }

  public toggleModal(): void {
    this.showModal = !this.showModal;
  }
}
