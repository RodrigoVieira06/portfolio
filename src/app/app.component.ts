import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { inject } from "@vercel/analytics"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public showAll: boolean = false;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
    inject();
    this.updateVideoSource();

    const body = document.body;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        this.updateVideoSource();
      });
    });
    observer.observe(body, {
      attributes: true,
      attributeFilter: ['class']
    });

    this.animateShowAll();
  }

  public animateShowAll(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.router.url !== '/home') {
          this.showAll = true;
          return;
        }
      });

    setTimeout(() => {
      this.showAll = true;
    }, 5000);
  }

  updateVideoSource(): void {
    const body = document.body;
    const videoElement = document.getElementById('background-video') as HTMLVideoElement;
    const sourceElement = videoElement.getElementsByTagName('source')[0];

    if (body.classList.contains('dark-theme')) {
      this.renderer.setAttribute(sourceElement, 'src', 'assets/backgrounds/dark.mp4');
    } else {
      this.renderer.setAttribute(sourceElement, 'src', 'assets/backgrounds/light.mp4');
    }

    videoElement.load();
  }
}
