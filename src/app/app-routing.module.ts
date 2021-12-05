import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./modules/home/home-page/home-page.component";
import {AboutPageComponent} from "./modules/about/about-page/about-page.component";
import {ProjectsPageComponent} from "./modules/projects/projects-page/projects-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'projects',
    component: ProjectsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
