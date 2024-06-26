import { Action } from 'redux';
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

  /** Toggle user like option */
  TOGGLE_USER_LIKE = 'TOGGLE_USER_LIKE',
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

export interface ToggleUserLikeAction {
  type: typeof UsersActionTypes.TOGGLE_USER_LIKE;
  payload: number;
}

export type FetchTopUsersActions =
  | FetchTopUsersRequestAction
  | FetchTopUsersSuccessAction
  | FetchTopUsersFailureAction;

export type FetchUsersBySearchActions =
  | FetchUsersBySearchRequestAction
  | FetchUsersBySearchSuccessAction
  | FetchUsersBySearchFailureAction;

type UnknownAction = Action<string>;

export type UserActions =
  | FetchTopUsersActions
  | FetchUsersBySearchActions
  | ToggleUserLikeAction | UnknownAction;
