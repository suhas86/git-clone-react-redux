import {
  UserActions,
  UsersActionTypes,
  FetchTopUsersSuccessAction,
  FetchTopUsersFailureAction,
} from '../actions/users/types';
import { Users } from '../types/usersTypes';

interface UsersState {
  loading: boolean;
  users: Users | null;
  error: string | null;
}

const initialState: UsersState = {
  loading: false,
  users: null,
  error: null,
};

export const usersReducer = (
  state = initialState,
  action: UserActions
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_TOP_USERS_REQUEST:
    case UsersActionTypes.FETCH_USERS_BY_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UsersActionTypes.FETCH_TOP_USERS_SUCCESS:
    case UsersActionTypes.FETCH_USERS_BY_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: (action as FetchTopUsersSuccessAction).payload,
        error: null,
      };
    case UsersActionTypes.FETCH_TOP_USERS_FAILURE:
    case UsersActionTypes.FETCH_USERS_BY_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: (action as FetchTopUsersFailureAction).payload,
      };
    default:
      return state;
  }
};
