import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public pathName: string = '';

  constructor(private router: Router) {
    this.pathName = this.router.url;
  }
}
