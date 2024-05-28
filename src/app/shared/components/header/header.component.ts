import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public pathName: string = '';
  public linkedinLink: string = 'https://www.linkedin.com/in/rodrigovl12/';
  public githubLink: string = 'https://github.com/RodrigoVieira06';
  public whastappLink: string = 'https://wa.me/5521990012455';

  constructor(private router: Router) {
    this.pathName = this.router.url;
  }
}
