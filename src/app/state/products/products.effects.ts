import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ApiService } from "src/app/services/api.service";
import * as ProductsActions from "./products.actions"

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions<any>, private apiService: ApiService) {}

  fetchProducts$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ProductsActions.fetchProductsInitiated),
      switchMap(() =>
        this.apiService.getProducts().pipe(
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