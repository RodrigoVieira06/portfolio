import { Component } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-theme-handler',
  templateUrl: './theme-handler.component.html',
  styleUrls: ['./theme-handler.component.scss']
})
export class ThemeHandlerComponent {
  public icon: IconName = 'moon';

  public toggleStylesTheme(): void {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.icon = 'sun';
      return;
    }

    this.icon = 'moon';
    return;
  }
}
