import { Product } from "src/app/models/product.model"

export type ProductsState = {
  products: Product[]
}

export const initialState: ProductsState = {
  products: []
}