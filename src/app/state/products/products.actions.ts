import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const  fetchProductsInitiated = createAction(
  "[Products Page] Fetch Products"
)
export const  fetchProductsSuccess = createAction(
  "[Products Page] Fetch Products Success",
  props<{products: Product[]}>()
)
export const  fetchProductsFailed = createAction(
  "[Products Page] Fetch Products Failed",
  props<{error: any}>()
)

export const turnPage = createAction(
  "[Products Page] Turn page",
  props<{page: number}>()
)
