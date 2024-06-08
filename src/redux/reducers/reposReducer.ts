import { RepoActionTypes, ReposActionTypes } from '../actions/repos/types';
import { Repos } from '../types/repoTypes';

interface ReposState {
  loading: boolean;
  repos: Repos | null;
  error: string | null;
}

const initialState: ReposState = {
  loading: false,
  repos: null,
  error: null,
};

export const reposReducer = (
  state = initialState,
  action: ReposActionTypes
): ReposState => {
  switch (action.type) {
    case RepoActionTypes.FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case RepoActionTypes.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.payload,
        error: null,
      };
    case RepoActionTypes.FETCH_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        repos: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
