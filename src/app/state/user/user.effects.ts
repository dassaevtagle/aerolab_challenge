import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AddPointsResponse } from "src/app/services";
import { NotificationService } from "src/app/services/notification.service";
import { UserService } from "src/app/services/user.service";
import * as UserActions from "./user.actions";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions<any>,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  getUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserInfoInitiated),
      switchMap(() =>
        this.userService.getUserInfo().pipe(
          map((user) => {
            this.notificationService.success({
              message: `Welcome back ${user.name}`,
            });
            return UserActions.getUserInfoSuccess({ user });
          }),
          catchError((error) => of(UserActions.getUserInfoFailed({ error })))
        )
      )
    )
  );
  addPoints$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addPointsInitiated),
      switchMap(({ amount }) =>
        this.userService.addPoints(amount).pipe(
          map((addPointsResponse: AddPointsResponse) => {
            return UserActions.addPointsSuccess(addPointsResponse);
          }),
          catchError((error) => of(UserActions.addPointsFailed({ error })))
        )
      )
    )
  );
}
