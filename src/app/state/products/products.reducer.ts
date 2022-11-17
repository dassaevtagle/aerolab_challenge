import { Action, createReducer, on } from "@ngrx/store";
import * as ProductsActions from "./products.actions"
import { initialState, ProductsState } from "./products.state";

const productsReducer = createReducer(
  initialState,
  on(ProductsActions.fetchProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  }))
)

export function reducer(state: ProductsState | undefined, action: Action) {
  return productsReducer(state, action)
}