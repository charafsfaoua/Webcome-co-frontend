import {Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {GuideDevSiteComponent} from "./guide-dev-site/guide-dev-site.component";
import {GuideSeaComponent} from "./guide-sea/guide-sea.component";
import {GuideSeoComponent} from "./guide-seo/guide-seo.component";

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
    component: GuideDevSiteComponent
  },
  {
    path: 'guide/dev-sea',
    component: GuideSeaComponent
  },
  {
    path: 'guide/dev-seo',
   component: GuideSeoComponent
  }
];
