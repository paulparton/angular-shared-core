// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { UsersActionTypes, UsersActionsUnion, AllUsersLoaded, ErrorLoadingAllUsers } from '../../../../shared-core/actions/users.actions';

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

  private populateUsers() {
    return of([
      {
        id: '1',
        name: 'mobile app user 1'
      },
      {
        id: '2',
        name: 'mobile app user 2'
      },
      {
        id: '3',
        name: 'mobile app user 3'
      }
    ]);
  }

}
