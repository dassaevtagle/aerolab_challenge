import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import * as UserActions from "./user.actions"

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions<any>, private userService: UserService) {}

  getUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserInfoInitiated),
      switchMap(() =>
        this.userService.getUserInfo().pipe(
          map((user) => 
            UserActions.getUserInfoSuccess({user})
          ),
          catchError((error) =>
            of(UserActions.getUserInfoFailed({error}))
          )
        )
      )
    )
  )
}