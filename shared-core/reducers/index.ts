import * as fromUsers from './users.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: fromUsers.UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
    users: fromUsers.reducer
};
