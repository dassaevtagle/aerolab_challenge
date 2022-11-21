import { ProductsState } from "./products";
import { UserState } from "./user";

export type State = {
  products: ProductsState;
  user: UserState;
};
