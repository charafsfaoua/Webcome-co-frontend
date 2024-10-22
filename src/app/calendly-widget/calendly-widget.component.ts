import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-calendly-widget',
  standalone: true,
  imports: [],
  templateUrl: './calendly-widget.component.html',
  styleUrl: './calendly-widget.component.css'
})
export class CalendlyWidgetComponent implements OnInit {

  url = 'https://calendly.com/sfaoua-webcome/une-consultation-gratuite-sur-votre-projet-clo-clone';

  constructor() {
  }

  ngOnInit(): void {
    window.Calendly.initInlineWidget({
      url: this.url,
      parentElement: document.querySelector('.calendly-contact'),
      prefill: {}
    });
  }
}
declare global {
  interface Window {
    Calendly: any;
  }
}

