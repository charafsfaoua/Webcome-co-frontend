import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-guide-dev-site',
  standalone: true,
  imports: [],
  templateUrl: './guide-dev-site.component.html',
  styleUrl: './guide-dev-site.component.css'
})
export class GuideDevSiteComponent implements OnInit {

  ngOnInit(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

}
