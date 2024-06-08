import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../reducers';
import { UserActionTypes } from '../actions/users/types';

export type AppActionTypes = UserActionTypes;

export type AppDispatch = ThunkDispatch<AppState, unknown, AppActionTypes>;
