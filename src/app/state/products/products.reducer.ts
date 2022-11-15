import { Action, createReducer, on } from "@ngrx/store";
import * as ProductsActions from "./products.actions"
import { initialState, ProductsState } from "./products.state";

const productsReducer = createReducer(
  initialState,
  on(ProductsActions.fetchProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    pagination: {
      ...state.pagination,
      totalPages: Math.ceil(products.length / state.pagination.pageSize)
    }
  })),
  on(ProductsActions.turnPage, (state, {page}) => {
    const newPaginationState = {...state.pagination, currentPage: page}
    return {
      ...state,
      pagination: newPaginationState
    }
  })
)

export function reducer(state: ProductsState | undefined, action: Action) {
  return productsReducer(state, action)
}