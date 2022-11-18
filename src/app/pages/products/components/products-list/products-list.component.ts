import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  catchProducts(products: Product[]) {
    this.products = products;
  }
}
