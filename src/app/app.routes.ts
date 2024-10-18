import {Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'guide/dev-site',
    loadComponent: () =>
      import('./guide-dev-site/guide-dev-site.component')
        .then(gdv => gdv.GuideDevSiteComponent)
  },
  {
    path: 'guide/dev-sea',
    loadComponent: () =>
      import('./guide-sea/guide-sea.component')
        .then(gds => gds.GuideSeaComponent)
  },
  {
    path: 'guide/dev-seo',
    loadComponent: () =>
      import('./guide-seo/guide-seo.component')
        .then(gds => gds.GuideSeoComponent)
  }
];
