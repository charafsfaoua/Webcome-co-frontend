import {Component, Input} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Review} from "../interface/review";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  @Input() public sectionTitleReview!: string;
  @Input() public reviews!: Review[];

}
