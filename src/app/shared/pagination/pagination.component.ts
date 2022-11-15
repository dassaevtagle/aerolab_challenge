import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from 'src/app/models/pagination.model';
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

  @Input() pagination: Pagination;
  @Input() numProducts: number;
  @Output() pageEmitter: EventEmitter<number> = new EventEmitter();
  hasNextPage: boolean;
  hasPrevPage: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.hasNextPage = this.pagination.currentPage < this.pagination.totalPages ? true : false
    this.hasPrevPage = this.pagination.currentPage > 1 ? true : false
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
