import { Action } from '@ngrx/store';
import { UserDetails } from '../reducers/user-details.reducer';

export enum UserDetailsActionTypes {
  LOAD_USER_DETAILS = '[Users] Load user details',
  USER_DETAILS_LOADED = '[Users] Loaded user details',
  ERROR_LOADING_USER_DETAILS = '[Users] Error Loading all users'
}

export class LoadUserDetails implements Action {
  readonly type = UserDetailsActionTypes.LOAD_USER_DETAILS;
  constructor(public userId: string) {}
}

export class UserDetailsLoaded implements Action {
  readonly type = UserDetailsActionTypes.USER_DETAILS_LOADED;

  constructor(public userDetails: UserDetails) {}
}

export class ErrorLoadingUserDetails implements Action {
  readonly type = UserDetailsActionTypes.ERROR_LOADING_USER_DETAILS;
  constructor(public error: any) {}
}

export type UserDetailsActionsUnion = LoadUserDetails | UserDetailsLoaded | ErrorLoadingUserDetails;
