import {Component, Input} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Services} from "../interface/services";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  @Input() public sectionTitleService!: string;
  @Input() public services!: Services[];

  constructor(private readonly router: Router) {
  }

  handleClickService(routerLink: string) {
    this.router.navigate([routerLink]).then(r => true);
  }

}

