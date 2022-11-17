import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Pagination } from 'src/app/models/pagination.model';
import { Product } from 'src/app/models/product.model';
import { selectAllProducts } from 'src/app/state/products';

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
  readonly PAGE_SIZE = 16; 
  categories = ['All Products']
  products: Product[];
  orderedProducts: Product[];
  visibleProducts: Product[];
  paginationForm = this.formBuilder.group({
    filterBy: this.categories,
    sortBy: [null],
  });
  pagination: Pagination = ({
    currentPage: 1,
    pageSize: this.PAGE_SIZE,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false
  });
 
  @Output() productsEmitter: EventEmitter<Product[]> = new EventEmitter();

  constructor(private store: Store, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.store.select(selectAllProducts)
      .subscribe(products => {
        this.products = products
        this.setCategories()
        this.update()
      })
    this.paginationForm.valueChanges
      .subscribe(() => {
        this.pagination.currentPage = 1;
        this.update()
      })
  }

  setCategories() {
    const categories = this.products.map(p => p.category)
    this.categories = [...this.categories,...new Set(categories)]
  }

  update() {
    //Order is important here!!
    this.orderProductsByFilters()
    this.paginateOrderedProducts()
    this.setVisibleProducts()
    this.productsEmitter.emit(this.visibleProducts)
  }

  paginateOrderedProducts(): void {
    const totalPages = Math.ceil(this.orderedProducts.length / this.pagination.pageSize)
    const hasNextPage = this.pagination.currentPage < totalPages ? true : false;
    const hasPrevPage = this.pagination.currentPage > 1 ? true : false;
    this.pagination = {
      ...this.pagination,
      totalPages,
      hasNextPage,
      hasPrevPage
    }
  }

  orderProductsByFilters(): void {
    let orderedProducts = this.products;
    const {filterBy, sortBy} = this.paginationForm.value
    if(filterBy !== "All Products") {
      orderedProducts = [...orderedProducts].filter(p => p.category === filterBy)
    }

    if(sortBy) {
      switch(sortBy){
        case 'lowest':
          orderedProducts = [...orderedProducts].sort((a, b) => {
            if(a.cost > b.cost) return 1;
            if(a.cost < b.cost) return -1;
            return 0;
          })
          break;
        case 'highest':
          orderedProducts = [...orderedProducts].sort((a, b) => {
            if(a.cost < b.cost) return 1;
            if(a.cost > b.cost) return -1;
            return 0;
          })
          break;
        case 'recent':
        default:
          orderedProducts = [...orderedProducts]; //All products are already ordered by most recent
          break;
      }
    } 
    this.orderedProducts = orderedProducts
  }

  setVisibleProducts() {
    const startIndex = this.pagination.pageSize * (this.pagination.currentPage - 1)
    const endIndex = startIndex + this.pagination.pageSize

    this.visibleProducts = this.orderedProducts.slice(startIndex, endIndex)
  }

  next() {
    if(this.pagination.hasNextPage){
      this.goToPage(this.pagination.currentPage + 1);
    }
  }

  previous() {
    if(this.pagination.hasPrevPage){
      this.goToPage(this.pagination.currentPage - 1);
    }
  }

  goToPage(page: number) {
    this.pagination.currentPage = page
    this.update()
  }
}
