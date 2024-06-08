import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../reducers';
import { UserActionTypes } from '../actions/users/types';
import { ReposActionTypes } from '../actions/repos/types';

export type AppActionTypes = UserActionTypes | ReposActionTypes;

export type AppDispatch = ThunkDispatch<AppState, unknown, AppActionTypes>;
