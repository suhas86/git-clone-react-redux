import { Repos } from '../../types/repoTypes';

export enum RepoActionTypes {
  /** Fetch Repos */
  FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST',
  FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS',
  FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE',
}

export interface FetchReposRequestAction {
  type: typeof RepoActionTypes.FETCH_REPOS_REQUEST;
}

export interface FetchReposSuccessAction {
  type: typeof RepoActionTypes.FETCH_REPOS_SUCCESS;
  payload: Repos;
}

export interface FetchReposFailureAction {
  type: typeof RepoActionTypes.FETCH_REPOS_FAILURE;
  payload: string;
}

export type RepoActions =
  | FetchReposRequestAction
  | FetchReposSuccessAction
  | FetchReposFailureAction;
