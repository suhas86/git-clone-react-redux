import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../reducers';
import { UserActions } from '../actions/users/types';
import { RepoActions } from '../actions/repos/types';

export type AppActionTypes = UserActions | RepoActions;

export type AppDispatch = ThunkDispatch<AppState, unknown, AppActionTypes>;
