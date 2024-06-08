import {
  Middleware,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import { ThunkMiddleware, thunk } from 'redux-thunk';
import rootReducer from '../reducers';
import { AppDispatch } from '../types/types';

// RootState: This type represents the complete state of your Redux store.
// StoreDispatch: This type represents the dispatch function used to dispatch actions to the Redux store.
export type RootState = ReturnType<typeof rootReducer>;
export type StoreDispatch = AppDispatch;

// Define middleware array
// const middleware = [thunk];
const middleware: Middleware[] = [
  thunk as ThunkMiddleware<RootState, AppDispatch>,
];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
