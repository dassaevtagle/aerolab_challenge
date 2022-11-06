import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe({
      next: products => this.products = products,
      error: error => console.error("An error on server has ocurred. Try again"),
    })
  }
}
