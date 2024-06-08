import { useSelector } from 'react-redux';
import { AppState } from './redux/reducers';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';
import { AppDispatch } from './redux/types/types';
import { useEffect } from 'react';
import { getTopUsersBySize } from './redux/actions/userActions';

function App() {
  const count = useSelector((state: AppState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getTopUsersBySize(10));
  }, [dispatch]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
