import { Users } from '../types/usersTypes';
import { fetchTopUsersBySize } from '../services';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export enum UsersActionTypes {
  FETCH_TOP_USERS_REQUEST = 'FETCH_TOP_USERS_REQUEST',
  FETCH_TOP_USERS_SUCCESS = 'FETCH_TOP_USERS_SUCCESS',
  FETCH_TOP_USERS_FAILURE = 'FETCH_TOP_USERS_FAILURE',
}

export interface FetchTopUsersRequestAction {
  type: typeof UsersActionTypes.FETCH_TOP_USERS_REQUEST;
}

export interface FetchTopUsersSuccessAction {
  type: typeof UsersActionTypes.FETCH_TOP_USERS_SUCCESS;
  payload: Users;
}

export interface FetchTopUsersFailureAction {
  type: typeof UsersActionTypes.FETCH_TOP_USERS_FAILURE;
  payload: string;
}

export type UserActionTypes =
  | FetchTopUsersRequestAction
  | FetchTopUsersSuccessAction
  | FetchTopUsersFailureAction;

export const fetchTopUsersRequest = (): FetchTopUsersRequestAction => ({
  type: UsersActionTypes.FETCH_TOP_USERS_REQUEST,
});

export const fetchTopUsersSuccess = (
  users: Users
): FetchTopUsersSuccessAction => ({
  type: UsersActionTypes.FETCH_TOP_USERS_SUCCESS,
  payload: users,
});

export const fetchTopUsersFailure = (
  error: string
): FetchTopUsersFailureAction => ({
  type: UsersActionTypes.FETCH_TOP_USERS_FAILURE,
  payload: error,
});

export const getTopUsersBySize =
  (size: number = 10): ThunkAction<void, RootState, unknown, UserActionTypes> =>
  async (dispatch) => {
    dispatch(fetchTopUsersRequest());
    try {
      const users = await fetchTopUsersBySize(size);
      dispatch(fetchTopUsersSuccess(users));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchTopUsersFailure(error.message));
      } else {
        dispatch(fetchTopUsersFailure('Oops something went wrong!!!'));
      }
    }
  };
