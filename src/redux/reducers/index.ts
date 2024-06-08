import { combineReducers } from 'redux';
import { usersReducer } from './userReducer';
import { reposReducer } from './reposReducer';

// Combine Reducers
const rootReducer = combineReducers({
  users: usersReducer,
  repos: reposReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
