import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import rootReducer from '../reducers';
import { AppActionTypes } from '../types/types';
import loggingMiddleware from '../middlewares/logging';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

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

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = ThunkDispatch<
  ApplicationState,
  unknown,
  AppActionTypes
>;
