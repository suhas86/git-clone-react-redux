import {
  UsersActionTypes,
  UserActionTypes,
  FetchTopUsersSuccessAction,
  FetchTopUsersFailureAction,
} from '../actions/userActions';
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
  action: UserActionTypes
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_TOP_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UsersActionTypes.FETCH_TOP_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: (action as FetchTopUsersSuccessAction).payload,
        error: null,
      };
    case UsersActionTypes.FETCH_TOP_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: (action as FetchTopUsersFailureAction).payload,
      };
    default:
      return state;
  }
};
