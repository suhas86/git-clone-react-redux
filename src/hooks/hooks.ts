import { TypedUseSelectorHook } from 'react-redux';
import { ApplicationDispatch, ApplicationState } from '../redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

export const useAppDispatch: () => ApplicationDispatch = useDispatch;
