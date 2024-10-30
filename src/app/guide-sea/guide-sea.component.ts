import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-guide-sea',
  standalone: true,
  imports: [],
  templateUrl: './guide-sea.component.html',
  styleUrl: './guide-sea.component.css'
})
export class GuideSeaComponent implements OnInit {

  ngOnInit(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

}
