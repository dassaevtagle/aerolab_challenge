import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, exhaustMap } from "rxjs";
import { ProductsService } from "src/app/services/products.service";
import * as ProductsActions from "./products.actions";
import * as UserActions from "../user/user.actions";
import { NotificationService } from "src/app/services/notification.service";

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions<any>,
    private productsService: ProductsService,
    private notificationService: NotificationService
  ) {}

  fetchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.fetchProductsInitiated),
      switchMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => ProductsActions.fetchProductsSuccess({ products })),
          catchError((error) =>
            of(ProductsActions.fetchProductsFailed({ error }))
          )
        )
      )
    )
  );

  redeemProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.redeemProductInitiated),
      exhaustMap(({ productId, productCost, productName }) =>
        this.productsService.redeemProduct(productId).pipe(
          map(({ message }) => {
            this.notificationService.success({
              title: productName,
              message: "redeemed successfully",
            });
            return ProductsActions.redeemProductSucess({
              message,
              productId,
              pointsRested: productCost,
            });
          }),
          catchError((error) => {
            this.notificationService.error({
              message: "There was a problem with the transaction",
            });
            return of(
              ProductsActions.redeemProductFailed({ error, productId })
            );
          })
        )
      )
    )
  );

  redeemProductSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.redeemProductSucess),
      map(({ pointsRested }) => UserActions.restPoints({ pointsRested }))
    )
  );
}
