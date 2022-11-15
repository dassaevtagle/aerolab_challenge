import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsComponent } from "src/app/pages/products/products.component";
import { ProductsState } from "./products.state";

export const selectProducts = createFeatureSelector<ProductsState>("products")

export const selectAllProducts = createSelector(
  selectProducts,
  (state: ProductsState) => state.products
)

export const selectPagination = createSelector(
  selectProducts,
  (state: ProductsState) => state.pagination
)

export const selectProductsWithPagination = createSelector(
  selectProducts,
  (state: ProductsState) => state
)