import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { HomeModule } from './modules/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutModule } from './modules/about/about.module';
import { DividerComponent } from './components/divider/divider.component';
import { ProjectsModule } from './modules/projects/projects.module';
import { ContactModule } from './modules/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HomeModule,
    AboutModule,
    ProjectsModule,
    ContactModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faLinkedin,
      faGithub,
      faWhatsapp
    );
  }
}
