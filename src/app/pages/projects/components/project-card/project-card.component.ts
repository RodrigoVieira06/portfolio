import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/shared/types/project.type';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() public entity!: IProject;

  public showModal: boolean = false;

  public toggleModal(): void {
    this.showModal = !this.showModal;
  }
}
