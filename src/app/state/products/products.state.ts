import { Pagination } from "src/app/models/pagination.model"
import { Product } from "src/app/models/product.model"

export type ProductsState = {
  products: Product[],
  pagination: Pagination
}

export const initialState: ProductsState = {
  products: [],
  pagination: {
    currentPage: 1,
    pageSize: 16,
    totalPages: 0
  }
}