// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserDetails } from '../reducers/user-details.reducer';
import { UserDetailsLoaded, ErrorLoadingUserDetails, UserDetailsActionTypes, CustomAction } from '../actions/user-details.actions';

@Injectable()
export class UserDetailsMobileAppEffects {

  // Listen for the 'LOGIN' action
  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UserDetailsActionTypes.LOAD_USER_DETAILS),
    switchMap(action => this.getUserDetail((action as CustomAction).payload)
        .pipe(
            map(res => new UserDetailsLoaded(res)),
            catchError(err => of(new ErrorLoadingUserDetails(err)))
        )));

  constructor(private actions$: Actions) {
  }

  private getUserDetail(userId: any): Observable<UserDetails> {
    const users: UserDetails[] = [{
      id: '123123123',
      userId: '1',
      favoriteColour: 'red',
      favouriteTransformer: 'Optimus Prime'
    },
    {
      id: '123123123',
      userId: '2',
      favoriteColour: 'blue',
      favouriteTransformer: 'Ultra Magnus'
    },
    {
      id: '123123123',
      userId: '3',
      favoriteColour: 'green',
      favouriteTransformer: 'Springer'
    }];

    return of(users.find(user => user.userId === userId));
  }

}
