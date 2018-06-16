// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserDetails } from '../reducers/user-details.reducer';
import { UserDetailsLoaded, ErrorLoadingUserDetails, UserDetailsActionTypes } from '../actions/user-details.actions';

@Injectable()
export class UserDetailsMobileAppEffects {

  // Listen for the 'LOGIN' action
  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UserDetailsActionTypes.LOAD_USER_DETAILS),
    switchMap(action => this.getUserDetail()
        .pipe(
            map(res => new UserDetailsLoaded(res)),
            catchError(err => of(new ErrorLoadingUserDetails(err)))
        )));

  constructor(private actions$: Actions) {
    console.log(`getUserDetails...constructor`);
  }

  private getUserDetail(): Observable<UserDetails> {
    console.log(`getUserDetails...`);
    return of({
      id: '123123123',
      userId: '1231231231',
      favoriteColour: 'blue',
      favouriteTransformer: 'Soundwave'
    });
  }

}
