import { Component } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-theme-handler',
  templateUrl: './theme-handler.component.html',
  styleUrls: ['./theme-handler.component.scss']
})
export class ThemeHandlerComponent {
  public icon: IconName = 'sun';

  public toggleStylesTheme(): void {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.icon = 'moon';
      return;
    }

    this.icon = 'sun';
    return;
  }
}
