import { Middleware } from 'redux';
import { RootState } from '../store';

const loggingMiddleware: Middleware<object, RootState> =
  (store) => (next) => (action) => {
    // Log the action
    console.log('Action:', action);

    // Get the current state before the action is dispatched
    const prevState = store.getState();

    // Dispatch the action
    const result = next(action);

    // Get the state after the action is dispatched
    const nextState = store.getState();

    // Log the state changes
    console.log('Prev State:', prevState);
    console.log('Next State:', nextState);

    return result;
  };

export default loggingMiddleware;
