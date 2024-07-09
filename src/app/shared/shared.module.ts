import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './components/divider/divider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    DividerComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    DividerComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
