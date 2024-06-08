import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from '../reducers';
import { AppDispatch } from '../types/types';
import loggingMiddleware from '../middlewares/logging';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// RootState: This type represents the complete state of your Redux store.
// StoreDispatch: This type represents the dispatch function used to dispatch actions to the Redux store.
export type RootState = ReturnType<typeof rootReducer>;
export type StoreDispatch = AppDispatch;

// Define middleware array
const middleware = [thunk, loggingMiddleware];

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(...middleware))
);
