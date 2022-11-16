import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Pagination } from 'src/app/models/pagination.model';
import { selectAllProducts, selectPagination } from 'src/app/state/products';

@Component({
  selector: 'products-pagination',
  templateUrl: './products-pagination.component.html',
  styles: [`
    input[type="radio"]:checked+label {
      @apply py-2;
    }
  `]
})
export class ProductsPaginationComponent implements OnInit {
  categories = ['All Products']
  pagination: Pagination = ({
    currentPage: 0,
    pageSize: 0,
    totalPages: 0,
  });
  numProducts: number = 0;
  hasNextPage: boolean = false;
  hasPrevPage: boolean = false;
  @Output() pageEmitter: EventEmitter<number> = new EventEmitter();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectPagination)
      .subscribe(pagination => {
        this.pagination = pagination
        this.hasNextPage = pagination.currentPage < pagination.totalPages ? true : false;
        this.hasPrevPage = pagination.currentPage > 1 ? true : false;
      })
    this.store.select(selectAllProducts)
      .subscribe(products => {
        this.numProducts = products.length
        const categories = products.map(p => p.category)
        this.categories = [...this.categories,...new Set(categories)]
      })
  }

  next() {
    if(this.hasNextPage){
      this.turnPage(this.pagination.currentPage + 1);
    }
  }

  previous() {
    if(this.hasPrevPage){
      this.turnPage(this.pagination.currentPage - 1);
    }
  }

  turnPage(page: number) {
    this.pageEmitter.emit(page);
  }

}
