import {Component} from '@angular/core';
import {Services} from "../core/interface/services";
import {ServiceComponent} from "../core/service/service.component";
import {reviews, services} from "../core/data";
import {Router} from "@angular/router";
import {ReviewComponent} from "../core/review/review.component";
import {Review} from "../core/interface/review";
import {CalendlyWidgetComponent} from "../calendly-widget/calendly-widget.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServiceComponent,
    ReviewComponent,
    CalendlyWidgetComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public services: Services[] = services;
  public reviews: Review[] = reviews;

  constructor(private readonly router: Router) {
  }

  handleContactPage() {
    this.router.navigate(['/contact']).then(r => true);
  }

  handleAboutPage() {
    this.router.navigate(['/about']).then(r => true);
  }

}
