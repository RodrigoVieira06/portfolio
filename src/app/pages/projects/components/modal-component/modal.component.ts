import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, Renderer2, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IProject } from 'src/app/shared/types/project.type';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'scale(1)',
          opacity: 1,
        })
      ),
      state(
        'close',
        style({
          transform: 'scale(0)',
          opacity: 0,
        })
      ),
      transition('open => close', [animate('0.25s ease-in')]),
      transition('close => open', [animate('0.25s ease-out')]),
    ]),
  ],
})
export class ModalComponent implements OnChanges, OnDestroy {
  @Input() entity!: IProject;
  @Input() showModal!: boolean;
  @Output() toggleModal = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['showModal']) {
      if (this.showModal) {
        this.renderer.addClass(document.body, 'overflow-hidden');
      } else {
        this.renderer.removeClass(document.body, 'overflow-hidden');
      }
    }
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

  toggle() {
    this.toggleModal.emit();
  }
}
