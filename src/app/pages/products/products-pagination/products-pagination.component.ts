import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Pagination } from 'src/app/models/pagination.model';
import { Product } from 'src/app/models/product.model';
import { selectAllProducts } from 'src/app/state/products';
import { memoize } from 'src/app/utils/memoize.decorator';

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
    const {filterBy, sortBy} = this.paginationForm.value
    const {orderedProducts, pagination, visibleProducts} = this.pureUpdate(this.products, this.pagination, filterBy, sortBy)
    this.productsEmitter.emit(visibleProducts)

    this.orderedProducts = orderedProducts
    this.pagination =  pagination
    this.visibleProducts = visibleProducts
  }

  pureUpdate(products: Product[], pagination: Pagination, filterBy? : string | null, sortBy?: string | null) {
    const newOrderedProducts = this.orderProducts(products, filterBy, sortBy)
    const newPagination = this.paginateOrderedProducts(newOrderedProducts, pagination)
    const newVisibleProducts = this.setVisibleProducts(newOrderedProducts, newPagination)
  
    return {
      products: newOrderedProducts,
      orderedProducts: newOrderedProducts,
      pagination: newPagination,
      visibleProducts: newVisibleProducts
    }
  }

  @memoize()
  paginateOrderedProducts(orderedProducts : Product[], pagination: Pagination): Pagination {
    const totalPages = Math.ceil(orderedProducts.length / pagination.pageSize)
    const hasNextPage = pagination.currentPage < totalPages ? true : false;
    const hasPrevPage = pagination.currentPage > 1 ? true : false;
    return {
      ...pagination,
      totalPages,
      hasNextPage,
      hasPrevPage
    }
  }

  @memoize()
  orderProducts(products: Product[], filterBy? : string | null, sortBy?: string | null ): Product[] {
    let orderedProducts = products;
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
    return orderedProducts;
  }

  @memoize()
  setVisibleProducts(orderedProducts: Product[], pagination: Pagination) {
    const startIndex = pagination.pageSize * (pagination.currentPage - 1)
    const endIndex = startIndex + pagination.pageSize

    return orderedProducts.slice(startIndex, endIndex)
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
