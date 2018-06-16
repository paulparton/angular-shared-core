import * as fromUserDetails from './user-details.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface UserDetailsState {
    userDetails: fromUserDetails.UserDetailsState;
}

export const reducers: ActionReducerMap<UserDetailsState> = {
    userDetails: fromUserDetails.reducer
};
