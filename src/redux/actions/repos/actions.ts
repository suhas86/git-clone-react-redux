import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';
import { Repos } from '../../types/repoTypes';
import {
  FetchReposRequestAction,
  FetchReposSuccessAction,
  FetchReposFailureAction,
  RepoActionTypes,
  RepoActions,
} from './types';
import { fetchReposByUserName } from '../../services';

// Action Creators
export const fetchReposRequest = (): FetchReposRequestAction => ({
  type: RepoActionTypes.FETCH_REPOS_REQUEST,
});

export const fetchReposSuccess = (users: Repos): FetchReposSuccessAction => ({
  type: RepoActionTypes.FETCH_REPOS_SUCCESS,
  payload: users,
});

export const fetchReposFailure = (error: string): FetchReposFailureAction => ({
  type: RepoActionTypes.FETCH_REPOS_FAILURE,
  payload: error,
});

// Thunk Functions
export const getReposByUserName =
  (userName: string): ThunkAction<void, RootState, unknown, RepoActions> =>
  async (dispatch) => {
    dispatch(fetchReposRequest());
    try {
      const users = await fetchReposByUserName(userName);
      dispatch(fetchReposSuccess(users));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchReposFailure(error.message));
      } else {
        dispatch(fetchReposFailure('Oops something went wrong!!!'));
      }
    }
  };
