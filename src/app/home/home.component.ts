import {Component} from '@angular/core';
import {Services} from "../core/interface/services";
import {ServiceComponent} from "../core/service/service.component";
import {services} from "../core/data";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServiceComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public services: Services[] = services;
}
