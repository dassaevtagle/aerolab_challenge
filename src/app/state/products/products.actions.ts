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
export const  redeemProductInitiated = createAction(
  "[Products Page] Redeem Product Initiated",
  props<{productId: string}>() 
)
export const  redeemProductSucess = createAction(
  "[Products Page] Redeem Product Success",
  props<{message: string}>() 
)
export const  redeemProductFailed = createAction(
  "[Products Page] Redeem Product Failed",
  props<{error: any}>() 
)