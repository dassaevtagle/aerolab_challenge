import { ActionReducerMap } from "@ngrx/store";
import { State } from "./core.state";
import * as ProductsReducer from "./products/products.reducer"
import * as UserReducer from "./user/user.reducer"

export const reducers: ActionReducerMap<State> = {
  products: ProductsReducer.reducer,
  user: UserReducer.reducer
}