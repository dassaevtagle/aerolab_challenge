import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { Icons } from 'src/app/shared/icons/icons.enum';
import { redeemProductInitiated } from 'src/app/state/products';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styles: [
  ]
})
export class ProductCardComponent implements OnInit {
  Icons = Icons
  @Input() product : Product;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  redeem() {
    this.store.dispatch(redeemProductInitiated({productId: this.product._id}))
  }

}
