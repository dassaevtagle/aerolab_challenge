import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { selectAllProducts } from 'src/app/state/products';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {
  products$ = this.store.select(selectAllProducts)

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }
}
