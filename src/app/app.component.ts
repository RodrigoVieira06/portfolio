import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  videoSource: string = 'assets/backgrounds/light.mp4';

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
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

    // Reload the video to apply the new source
    videoElement.load();
  }
}
