import { useSelector } from 'react-redux';
import { AppState } from './redux/reducers';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/types/types';
import { useEffect } from 'react';
import { getTopUsersBySize } from './redux/actions/users/actions';

function App() {
  const users = useSelector((state: AppState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getTopUsersBySize(10));
  }, [dispatch]);

  return <div>{users?.total_count}</div>;
}

export default App;
