import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/shared/services/contact/contact.service';
import { environment } from 'src/environments/environment';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ContactComponent {
  public staticFormsKey: string = environment.staticForms.accessKey;

  public pathName: string = '';
  public linkedinLink: string = 'https://www.linkedin.com/in/rodrigovieira12';
  public githubLink: string = 'https://github.com/RodrigoVieira06';
  public whastappLink: string = 'https://wa.me/5521990012455';

  public isLoading: boolean = false;
  public isFocused = {
    name: false,
    email: false,
    subject: false,
    message: false,
  };

  public contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
    accessKey: new FormControl(this.staticFormsKey)
  })

  constructor(
    private router: Router,
    private contactService: ContactService
  ) {
    this.pathName = this.router.url;
  }

  public sendEmail() {
    this.isLoading = true;
    this.contactService.sendEmail(this.contactForm.value)
      .subscribe(() => {
        this.contactService.sendResponse(this.contactForm.value)
        this.router.navigate(['contact/success']);
      });
  }
  onFocus(field: 'name' | 'email' | 'subject' | 'message'): void {
    this.isFocused[field] = true;
  }

  onBlur(field: 'name' | 'email' | 'subject' | 'message') {
    this.isFocused[field] = false;
  }

}
