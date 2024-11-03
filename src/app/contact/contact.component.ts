import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {CalendlyWidgetComponent} from "../calendly-widget/calendly-widget.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterLink,
    CalendlyWidgetComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
