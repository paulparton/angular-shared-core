import * as fromUserDetails from './user-details.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface UserDetailsState {
    userDetails: fromUserDetails.UserDetailsState;
}

export const reducers: ActionReducerMap<UserDetailsState> = {
    userDetails: fromUserDetails.reducer
};

export const selectUserDetailState = createFeatureSelector<UserDetailsState>('userDetails');
