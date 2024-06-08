import { Users } from '../../types/usersTypes';
import { fetchTopUsersBySize, fetchUserBySearch } from '../../services';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';
import {
  FetchTopUsersRequestAction,
  UsersActionTypes,
  FetchTopUsersSuccessAction,
  FetchTopUsersFailureAction,
  FetchUsersBySearchRequestAction,
  FetchUsersBySearchSuccessAction,
  FetchUsersBySearchFailureAction,
  FetchTopUsersActionTypes,
  FetchUsersBySearchActionTypes,
} from './types';

// Action Creators
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

export const fetchSearchUsersRequest = (): FetchUsersBySearchRequestAction => ({
  type: UsersActionTypes.FETCH_USERS_BY_SEARCH_REQUEST,
});

export const fetchSearchUsersSuccess = (
  users: Users
): FetchUsersBySearchSuccessAction => ({
  type: UsersActionTypes.FETCH_USERS_BY_SEARCH_SUCCESS,
  payload: users,
});

export const fetchSearchUsersFailure = (
  error: string
): FetchUsersBySearchFailureAction => ({
  type: UsersActionTypes.FETCH_USERS_BY_SEARCH_FAILURE,
  payload: error,
});

// Thunk Functions
export const getTopUsersBySize =
  (
    size: number = 10
  ): ThunkAction<void, RootState, unknown, FetchTopUsersActionTypes> =>
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

export const getUsersBySearch =
  (
    userName: string
  ): ThunkAction<void, RootState, unknown, FetchUsersBySearchActionTypes> =>
  async (dispatch) => {
    dispatch(fetchSearchUsersRequest());
    try {
      const users = await fetchUserBySearch(userName);
      dispatch(fetchSearchUsersSuccess(users));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchSearchUsersFailure(error.message));
      } else {
        dispatch(fetchSearchUsersFailure('Oops something went wrong!!!'));
      }
    }
  };
