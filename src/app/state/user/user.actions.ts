import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { AddPointsResponse } from "src/app/services";

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

export const addPointsInitiated = createAction(
  "[User] Add Points Initiated",
  props<{amount: number}>()
)
export const addPointsSuccess = createAction(
  "[User] Add Points Success",
  props<AddPointsResponse>()
)
export const addPointsFailed = createAction(
  "[User] Add points initiated",
  props<{error: any}>()
)