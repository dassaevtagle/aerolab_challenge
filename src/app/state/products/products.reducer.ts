import { Action, createReducer, on } from "@ngrx/store";
import { cloneDeep } from "src/app/utils/cloneDeep";
import * as ProductsActions from "./products.actions";
import { initialState, ProductsState } from "./products.state";

const productsReducer = createReducer(
  initialState,
  on(ProductsActions.fetchProductsSuccess, (state, { products }) => ({
    ...state,
    products: cloneDeep(products).map((p) => {
      p.isBeingRedeemed = false;
      return p;
    }),
  })),
  on(ProductsActions.redeemProductInitiated, (state, { productId }) => ({
    ...state,
    products: cloneDeep(state.products).map((p) => {
      if (p._id === productId) {
        p.isBeingRedeemed = true;
      }
      return p;
    }),
  })),
  on(ProductsActions.redeemProductSucess, (state, { productId }) => ({
    ...state,
    products: cloneDeep(state.products).map((p) => {
      if (p._id === productId) {
        p.isBeingRedeemed = false;
      }
      return p;
    }),
  })),
  on(ProductsActions.redeemProductFailed, (state, { productId }) => ({
    ...state,
    products: cloneDeep(state.products).map((p) => {
      if (p._id === productId) {
        p.isBeingRedeemed = false;
      }
      return p;
    }),
  }))
);

export function reducer(state: ProductsState | undefined, action: Action) {
  return productsReducer(state, action);
}
