import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Pagination } from 'src/app/models/pagination.model';
import { Product } from 'src/app/models/product.model';
import { selectAllProducts, selectPagination, selectProductsWithPagination, turnPage } from 'src/app/state/products';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>
  pagination$: Observable<Pagination>
  constructor(private store: Store) {
    this.products$ = this.store.select(selectProductsWithPagination).pipe(
      map(({products, pagination}) => this.cutVisibleProducts(pagination.currentPage, pagination.pageSize, products))
    )
    this.pagination$ = this.store.select(selectPagination)
  }

  ngOnInit(): void {
  }

  cutVisibleProducts(currentPage: number, pageSize: number, products: Product[]): Product[] {
    const startIndex = pageSize * (currentPage - 1)
    const endIndex = startIndex + pageSize
    return products.slice(startIndex, endIndex)
  }

  goToPage(page: number) {
    this.store.dispatch(turnPage({page}))
  }
}
