import { INCREMENT, DECREMENT } from './actionTypes';

// Action Interfaces
export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

// Union of Action Types
export type CounterActionTypes = IncrementAction | DecrementAction;

// Action Creators
export const increment = (): IncrementAction => ({
  type: INCREMENT,
});

export const decrement = (): DecrementAction => ({
  type: DECREMENT,
});
