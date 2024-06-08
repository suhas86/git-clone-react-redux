import { Dispatch } from 'redux';
import { CounterActionTypes } from '../actions';
import { UserActionTypes } from '../actions/userActions';

export type AppDispatch = Dispatch<CounterActionTypes | UserActionTypes>;
