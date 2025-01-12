import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendly-widget',
  standalone: true,
  imports: [],
  templateUrl: './calendly-widget.component.html',
  styleUrl: './calendly-widget.component.css'
})
export class CalendlyWidgetComponent implements OnInit {

  url = 'https://calendly.com/sfaoua-webcome-tgmc/30min';

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

