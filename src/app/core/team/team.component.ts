import {Component, Input} from '@angular/core';
import {Team} from "../interface/team";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  @Input()
  teamsItem!: Team[];

}
