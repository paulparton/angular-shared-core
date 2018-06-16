import { UserDetailsActionsUnion, UserDetailsActionTypes } from '../actions/user-details.actions';
import { createFeatureSelector } from '@ngrx/store';

export interface UserDetails {
    id: string;
    userId: string;
    favoriteColour: string;
    favouriteTransformer: string;
}
export interface UserDetailsState {
    loading: boolean;
    user: UserDetails;
    error?: any;
}

const defaultState: UserDetailsState = {
    loading: false,
    user: null,
    error: null
};

export function reducer(state: UserDetailsState = defaultState, action: UserDetailsActionsUnion): UserDetailsState {
  switch (action.type) {
    case UserDetailsActionTypes.LOAD_USER_DETAILS: {
      return {
          ...state,
          loading: true
      };
    }

    case UserDetailsActionTypes.USER_DETAILS_LOADED: {
        return {
            ...state,
            loading: false,
            user: action.userDetails
        };
    }

    case UserDetailsActionTypes.ERROR_LOADING_USER_DETAILS: {
        return {
            ...state,
            loading: false,
            error: action.error
        };
    }

    default: {
      return state;
    }
  }
}

export const selectUserDetailState = createFeatureSelector<UserDetailsState>('userDetails');
