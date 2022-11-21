import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Subject } from "rxjs";
import { Product } from "src/app/models/product.model";
import { Icons } from "src/app/shared/icons/icons.enum";
import { redeemProductInitiated } from "src/app/state/products";
import { selectUserInfo } from "src/app/state/user";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styles: [],
})
export class ProductCardComponent implements OnInit {
  Icons = Icons;
  @Input() product: Product;
  userPoints: number = -1;
  processing$: Subject<boolean> = new BehaviorSubject(false);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectUserInfo)
      .subscribe((u) => (this.userPoints = u.points));
  }

  redeem(): void {
    this.store.dispatch(
      redeemProductInitiated({
        productId: this.product._id,
        productCost: this.product.cost,
        productName: this.product.name,
      })
    );
  }
}
