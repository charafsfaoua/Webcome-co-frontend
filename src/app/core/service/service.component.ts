import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Services} from "../interface/services";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  @Input() public sectionTitleService!: string;
  @Input() public services!: Services[];

}

