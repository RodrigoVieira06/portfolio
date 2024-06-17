import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faCircleCheck, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { AboutModule } from './pages/about/about.module';
import { ContactModule } from './pages/contact/contact.module';
import { HomeModule } from './pages/home/home.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AboutModule,
    ContactModule,
    HomeModule,
    ProjectsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faLinkedin,
      faGithub,
      faWhatsapp,
      faCircleCheck,
      faArrowUpRightFromSquare,
      faSun,
      faMoon
    );
  }
}
