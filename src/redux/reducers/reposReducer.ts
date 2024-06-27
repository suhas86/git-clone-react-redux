import { FetchReposFailureAction, FetchReposSuccessAction, RepoActionTypes, RepoActions } from '../actions/repos/types';
import { Repos } from '../types/repoTypes';

interface ReposState {
  loading: boolean;
  repos: Repos[] | null;
  error: string | null;
}

const initialState: ReposState = {
  loading: false,
  repos: null,
  error: null,
};

export const reposReducer = (
  state = initialState,
  action: RepoActions
): ReposState => {
  switch (action.type) {
    case RepoActionTypes.FETCH_REPOS_REQUEST:
    case RepoActionTypes.FETCH_REPOS_BY_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case RepoActionTypes.FETCH_REPOS_SUCCESS:
    case RepoActionTypes.FETCH_REPOS_BY_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: (action as FetchReposSuccessAction).payload,
        error: null,
      };
    case RepoActionTypes.FETCH_REPOS_FAILURE:
    case RepoActionTypes.FETCH_REPOS_BY_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        repos: null,
        error: (action as FetchReposFailureAction).payload,
      };
    default:
      return state;
  }
};
