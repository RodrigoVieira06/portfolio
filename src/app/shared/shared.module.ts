import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './components/divider/divider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeHandlerComponent } from './components/theme-handler/theme-handler.component';


@NgModule({
  declarations: [
    DividerComponent,
    FooterComponent,
    HeaderComponent,
    ThemeHandlerComponent
  ],
  exports: [
    DividerComponent,
    FooterComponent,
    HeaderComponent,
    ThemeHandlerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
