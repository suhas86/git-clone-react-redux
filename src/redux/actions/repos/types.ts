import { Repos } from '../../types/repoTypes';

export enum RepoActionTypes {
  /** Fetch Repos */
  FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST',
  FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS',
  FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE',

  /** Fetch Repos by serch */
  FETCH_REPOS_BY_SEARCH_REQUEST = 'FETCH_REPOS_BY_SEARCH_REQUEST',
  FETCH_REPOS_BY_SEARCH_SUCCESS = 'FETCH_REPOS_BY_SEARCH_SUCCESS',
  FETCH_REPOS_BY_SEARCH_FAILURE = 'FETCH_REPOS_BY_SEARCH_FAILURE',
}

export interface FetchReposRequestAction {
  type: typeof RepoActionTypes.FETCH_REPOS_REQUEST;
}

export interface FetchReposSuccessAction {
  type: typeof RepoActionTypes.FETCH_REPOS_SUCCESS;
  payload: Repos[];
}

export interface FetchReposFailureAction {
  type: typeof RepoActionTypes.FETCH_REPOS_FAILURE;
  payload: string;
}

export interface FetchReposBySearchRequestAction {
  type: typeof RepoActionTypes.FETCH_REPOS_BY_SEARCH_REQUEST;
}

export interface FetchReposBySearchSuccessAction {
  type: typeof RepoActionTypes.FETCH_REPOS_BY_SEARCH_SUCCESS;
  payload: Repos[];
}

export interface FetchReposBySearchFailureAction {
  type: typeof RepoActionTypes.FETCH_REPOS_BY_SEARCH_FAILURE;
  payload: string;
}

export type FetchReposActions =
  | FetchReposRequestAction
  | FetchReposSuccessAction
  | FetchReposFailureAction;

export type FetchReposSearchActions =
  | FetchReposBySearchRequestAction
  | FetchReposBySearchSuccessAction
  | FetchReposBySearchFailureAction;

export type RepoActions = FetchReposActions | FetchReposSearchActions;
