import {Component} from '@angular/core';
import {Services} from "../core/interface/services";
import {ServiceComponent} from "../core/service/service.component";
import {reviews, services, team} from "../core/data";
import {Router} from "@angular/router";
import {ReviewComponent} from "../core/review/review.component";
import {Review} from "../core/interface/review";
import {CalendlyWidgetComponent} from "../calendly-widget/calendly-widget.component";
import {TeamComponent} from "../core/team/team.component";
import {Team} from "../core/interface/team";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServiceComponent,
    ReviewComponent,
    CalendlyWidgetComponent,
    TeamComponent,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public services: Services[] = services;
  public reviews: Review[] = reviews;
  public team: Team[] = team;

  constructor(private readonly router: Router) {
  }

  handleContactPage() {
    this.router.navigate(['/contact']).then(r => true);
  }

  handleAboutPage() {
    this.router.navigate(['/about']).then(r => true);
  }

}
