import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {ServiceComponent} from "../core/service/service.component";
import {Services} from "../core/interface/services";
import {services} from "../core/data";

@Component({
  selector: 'app-services',
  standalone: true,
    imports: [
        RouterLink,
        ServiceComponent
    ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  public services: Services[] = services;

  constructor(private readonly router: Router) {
  }
}
