import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styles: [`
    input[type="radio"]:checked+label {
      @apply py-2;
    }
  `]
})
export class PaginationComponent implements OnInit {
  categories = ['All Products', 'Gaming', 'Audio', 'Smart Home', 'Monitors & TV']

  constructor() { }

  ngOnInit(): void {
  }

}
