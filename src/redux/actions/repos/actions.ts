import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';
import { Repos } from '../../types/repoTypes';
import {
  FetchReposRequestAction,
  FetchReposSuccessAction,
  FetchReposFailureAction,
  RepoActionTypes,
  FetchReposActions,
  FetchReposSearchActions,
  FetchReposBySearchFailureAction,
  FetchReposBySearchRequestAction,
  FetchReposBySearchSuccessAction,
} from './types';
import { fetchRepoBySearch, fetchReposByUserName } from '../../services';

// Action Creators
export const fetchReposRequest = (): FetchReposRequestAction => ({
  type: RepoActionTypes.FETCH_REPOS_REQUEST,
});

export const fetchReposSuccess = (repos: Repos[]): FetchReposSuccessAction => ({
  type: RepoActionTypes.FETCH_REPOS_SUCCESS,
  payload: repos,
});

export const fetchReposFailure = (error: string): FetchReposFailureAction => ({
  type: RepoActionTypes.FETCH_REPOS_FAILURE,
  payload: error,
});

export const fetchReposBySearchRequest =
  (): FetchReposBySearchRequestAction => ({
    type: RepoActionTypes.FETCH_REPOS_BY_SEARCH_REQUEST,
  });

export const fetchReposBySearchSuccess = (
  repos: Repos[]
): FetchReposBySearchSuccessAction => ({
  type: RepoActionTypes.FETCH_REPOS_BY_SEARCH_SUCCESS,
  payload: repos,
});

export const fetchReposBySearchFailure = (
  error: string
): FetchReposBySearchFailureAction => ({
  type: RepoActionTypes.FETCH_REPOS_BY_SEARCH_FAILURE,
  payload: error,
});

// Thunk Functions
export const getReposByUserName =
  (
    userName: string
  ): ThunkAction<void, RootState, unknown, FetchReposActions> =>
  async (dispatch) => {
    dispatch(fetchReposRequest());
    try {
      const repos = await fetchReposByUserName(userName);
      dispatch(fetchReposSuccess(repos));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchReposFailure(error.message));
      } else {
        dispatch(fetchReposFailure('Oops something went wrong!!!'));
      }
    }
  };

export const getReposBySearch =
  (
    userName: string,
    text: string
  ): ThunkAction<void, RootState, unknown, FetchReposSearchActions> =>
  async (dispatch) => {
    dispatch(fetchReposBySearchRequest());
    try {
      const repos = await fetchRepoBySearch(userName, text);
      dispatch(fetchReposBySearchSuccess(repos?.items));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchReposBySearchFailure(error.message));
      } else {
        dispatch(fetchReposBySearchFailure('Oops something went wrong!!!'));
      }
    }
  };
