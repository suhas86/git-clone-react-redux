import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { usersReducer } from './userReducer';

// Combine Reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
