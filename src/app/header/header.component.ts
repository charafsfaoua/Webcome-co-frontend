import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private readonly router: Router) {
  }


  handleContactPage() {
    this.router.navigate(['/contact']).then(r => true);
  }
}
