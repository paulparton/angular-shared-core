import { UserDetailsActionsUnion, UserDetailsActionTypes } from '../actions/user-details.actions';

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
    console.log(`Uset Details Reducer....`);
  switch (action.type) {
    case UserDetailsActionTypes.LOAD_USER_DETAILS: {
        console.log(`Uset Details Reducer.... load details`, action);
      return {
          ...state,
          loading: true
      };
    }

    case UserDetailsActionTypes.USER_DETAILS_LOADED: {
        console.log(`user details loaded....`, action.userDetails);
        return {
            ...state,
            loading: false,
            user: action.userDetails
        };
    }

    case UserDetailsActionTypes.ERROR_LOADING_USER_DETAILS: {
        console.log(`Uset Details Reducer.... err`, action);
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
