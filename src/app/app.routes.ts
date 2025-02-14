import {Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {GuideDevSiteComponent} from "./guide-dev-site/guide-dev-site.component";
import {GuideSeaComponent} from "./guide-sea/guide-sea.component";
import {GuideSeoComponent} from "./guide-seo/guide-seo.component";
import {CareerComponent} from "./career/career.component";
import {MentionsLegalsComponent} from "./Cgu/mentions-legals/mentions-legals.component";
import {TermesConditionsComponent} from "./Cgu/termes-conditions/termes-conditions.component";

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
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'creation-site-web',
    component: GuideDevSiteComponent
  },
  {
    path: 'referencement-sea',
    component: GuideSeaComponent
  },
  {
    path: 'referencement-seo',
    component: GuideSeoComponent
  },
  {
    path: 'mentionsLegals',
    component: MentionsLegalsComponent
  },
  {
    path: 'termsConditions',
    component: TermesConditionsComponent
  }
];
