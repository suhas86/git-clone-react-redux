import { Users } from '../../types/usersTypes';

export enum UsersActionTypes {
  /** Fetch users */
  FETCH_TOP_USERS_REQUEST = 'FETCH_TOP_USERS_REQUEST',
  FETCH_TOP_USERS_SUCCESS = 'FETCH_TOP_USERS_SUCCESS',
  FETCH_TOP_USERS_FAILURE = 'FETCH_TOP_USERS_FAILURE',

  /** Fetch users by search */
  FETCH_USERS_BY_SEARCH_REQUEST = 'FETCH_USERS_BY_SEARCH_REQUEST',
  FETCH_USERS_BY_SEARCH_SUCCESS = 'FETCH_USERS_BY_SEARCH_SUCCESS',
  FETCH_USERS_BY_SEARCH_FAILURE = 'FETCH_USERS_BY_SEARCH_FAILURE',
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

export interface FetchUsersBySearchRequestAction {
  type: typeof UsersActionTypes.FETCH_USERS_BY_SEARCH_REQUEST;
}

export interface FetchUsersBySearchSuccessAction {
  type: typeof UsersActionTypes.FETCH_USERS_BY_SEARCH_SUCCESS;
  payload: Users;
}

export interface FetchUsersBySearchFailureAction {
  type: typeof UsersActionTypes.FETCH_USERS_BY_SEARCH_FAILURE;
  payload: string;
}
export type FetchTopUsersActionTypes =
  | FetchTopUsersRequestAction
  | FetchTopUsersSuccessAction
  | FetchTopUsersFailureAction;

export type FetchUsersBySearchActionTypes =
  | FetchUsersBySearchRequestAction
  | FetchUsersBySearchSuccessAction
  | FetchUsersBySearchFailureAction;

export type UserActionTypes =
  | FetchTopUsersActionTypes
  | FetchUsersBySearchActionTypes;
