import { Action, createReducer, on } from "@ngrx/store";
import * as UserActions from "./user.actions"
import { initialState, UserState } from "./user.state";

const userReducer = createReducer(
  initialState,
  on(UserActions.getUserInfoSuccess, (state, { user }) => ({
    ...state,
    user
  })),
  on(UserActions.addPointsSuccess, (state, {['New Points']: newPoints}) => ({
    ...state,
    user: {
      ...state.user,
      points: newPoints 
    }
  }))
)

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action)
}