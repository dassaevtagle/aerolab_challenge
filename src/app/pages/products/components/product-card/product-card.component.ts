import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Icons } from 'src/app/shared/icons/icons.enum';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styles: [
  ]
})
export class ProductCardComponent implements OnInit {
  Icons = Icons
  @Input() product : Product;

  constructor() { }

  ngOnInit(): void {
  }

}
