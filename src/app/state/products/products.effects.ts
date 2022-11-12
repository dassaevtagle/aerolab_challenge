import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ProductsService } from "src/app/services/products.service";
import * as ProductsActions from "./products.actions"

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions<any>, private productsService: ProductsService) {}

  fetchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.fetchProductsInitiated),
      switchMap(() =>
        this.productsService.getProducts().pipe(
          map((products) =>
            ProductsActions.fetchProductsSuccess({products})
          ),
          catchError((error) =>
            of(ProductsActions.fetchProductsFailed({error}))
          )
        )
      )
    )
  )
}