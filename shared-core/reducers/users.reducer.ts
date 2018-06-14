import { UsersActionsUnion, UsersActionTypes } from '../actions/users.actions';

export interface User {
    id: string;
    name: string;
}
export interface UsersState {
    loading: boolean;
    users: any[];
    error?: any;
}

const defaultState: UsersState = {
    loading: false,
    users: null,
    error: null
};

export function reducer(state: UsersState = defaultState, action: UsersActionsUnion): UsersState {
  switch (action.type) {
    case UsersActionTypes.LOAD_ALL_USERS: {
      return {
          ...state,
          loading: true
      };
    }

    case UsersActionTypes.ALL_USERS_LOADED: {
        return {
            ...state,
            loading: false,
            users: action.users
        };
    }

    case UsersActionTypes.ERROR_LOADING_ALL_USERS: {
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
