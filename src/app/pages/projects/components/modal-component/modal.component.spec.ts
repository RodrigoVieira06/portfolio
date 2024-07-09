import { ComponentFixture, TestBed } from '@angular/core/testing';

import { modalComponent } from './modal.component';

describe('modalComponent', () => {
  let component: modalComponent;
  let fixture: ComponentFixture<modalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [modalComponent]
    });
    fixture = TestBed.createComponent(modalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
