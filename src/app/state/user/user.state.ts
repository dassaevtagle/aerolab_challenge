import { User } from "src/app/models/user.model";

export type UserState = {
  user: User;
};

export const initialState: UserState = {
  user: {
    _id: "",
    name: "",
    points: 0,
    createDate: "",
    redeemHistory: [],
  },
};
