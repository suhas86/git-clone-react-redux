import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';

// Combine Reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
