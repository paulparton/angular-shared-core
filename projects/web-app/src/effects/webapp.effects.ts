// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  AllUsersLoaded,
  ErrorLoadingAllUsers,
  UsersActionTypes
} from '../../../../shared-core/actions/users.actions';
import { User } from 'shared-core/reducers/users.reducer';

@Injectable()
export class WebAppUserEffects {

  // Listen for the 'LOGIN' action
  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActionTypes.LOAD_ALL_USERS),
    switchMap(action => this.populateUsers()
        .pipe(
            map(res => new AllUsersLoaded(res)),
            catchError(err => of(new ErrorLoadingAllUsers(err)))
        )));

  constructor(private actions$: Actions) {}

  private populateUsers(): Observable<User[]> {
    return of([
      {
        id: '1',
        name: 'web app user 1'
      },
      {
        id: '2',
        name: 'web app user 2'
      },
      {
        id: '3',
        name: 'web app user 3'
      }
    ]);
  }

}
