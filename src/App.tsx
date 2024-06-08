import { useSelector } from 'react-redux';
import { AppState } from './redux/reducers';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';
import { AppDispatch } from './redux/types/types';

function App() {
  const count = useSelector((state: AppState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
