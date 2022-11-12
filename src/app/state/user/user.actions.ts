import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const getUserInfoInitiated = createAction(
  "[User] Get User Info"
)

export const getUserInfoSuccess = createAction(
  "[User] Get User Info Success",
  props<{user: User}>()
)

export const getUserInfoFailed = createAction(
  "[User] Get User Info Failed",
  props<{error: any}>()
)