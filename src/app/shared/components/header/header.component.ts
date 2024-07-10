import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public linkedinLink: string = 'https://www.linkedin.com/in/rodrigovl12/';
  public githubLink: string = 'https://github.com/RodrigoVieira06';
  public whastappLink: string = 'https://wa.me/5521990012455';

  public menuOpen: boolean = false;

  public menuToggle(): void {
    this.menuOpen = !this.menuOpen;
  }
}
