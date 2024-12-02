import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counters',
  standalone: true,
  imports: [],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.css'
})
export class CountersComponent implements OnInit {


  ngOnInit(): void {
    // Get allValues using querySelectorAll
    let allValues = document.querySelectorAll(".value");

// Start the forEach loop for displaying the values
    allValues.forEach((singleValue) => {
      let startValue = 0;
      let endValue = parseInt(<string>singleValue.getAttribute("data-value"));
      let duration = Math.floor(2000 / endValue);

      // Counter for increaing the values & display
      let counter = setInterval(function () {
        startValue += 1;
        singleValue.textContent = String(startValue);
        // Clearing the interval
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }


}
