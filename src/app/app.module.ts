import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './modules/shared/header/header.component';
import { ALinkComponent } from './modules/shared/a-link/a-link.component';
import { AboutPageComponent } from './modules/about/about-page/about-page.component';
import { RecentProjectComponent } from './modules/home/components/recent-project/recent-project.component';
import { ProjectsPageComponent } from './modules/projects/projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ALinkComponent,
    AboutPageComponent,
    RecentProjectComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
