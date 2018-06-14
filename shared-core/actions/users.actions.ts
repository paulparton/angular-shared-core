import { Action } from '@ngrx/store';

export enum UsersActionTypes {
  LOAD_ALL_USERS = '[Users] Load all users',
  ALL_USERS_LOADED = '[Users] Loaded all users',
  ERROR_LOADING_ALL_USERS = '[Users] Error Loading all users'
}

export class LoadAllUsers implements Action {
  readonly type = UsersActionTypes.LOAD_ALL_USERS;
}

export class AllUsersLoaded implements Action {
  readonly type = UsersActionTypes.ALL_USERS_LOADED;

  constructor(public users: any[]) {}
}

export class ErrorLoadingAllUsers implements Action {
  readonly type = UsersActionTypes.ERROR_LOADING_ALL_USERS;
  constructor(public error: any) {}
}

export type UsersActionsUnion = LoadAllUsers | AllUsersLoaded | ErrorLoadingAllUsers;
