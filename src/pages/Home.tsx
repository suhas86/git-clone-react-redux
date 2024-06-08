import React, { useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/reducers';
import { useDispatch } from 'react-redux';
import {
  getTopUsersBySize,
  getUsersBySearch,
} from '../redux/actions/users/actions';
import { AppDispatch } from '../redux/types/types';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  const { loading, users, error } = useSelector(
    (state: AppState) => state.users
  );
  const dispatch = useDispatch<AppDispatch>();
  const handleSearch = (query: string) => {
    if (query) {
      dispatch(getUsersBySearch(query));
    } else {
      dispatch(getTopUsersBySize());
    }
  };
  useEffect(() => {
    dispatch(getTopUsersBySize());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4 flex flex-col">
      <div className="flex justify-center mb-6">
        <div className="w-2/3">
          <SearchBox placeholder="Search user..." onSearch={handleSearch} />
        </div>
      </div>
      <hr />
      <h2 className="text-2xl text-blue-700 font-bold my-4">
        Users - {users?.total_count}
      </h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div
          className="flex-grow  overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 300px)' }}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users?.items.map((user) => (
              <li
                key={user.login}
                className="flex items-center space-x-4 p-4 bg-white rounded shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={user.avatar_url}
                  alt={`${user.login} avatar`}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-lg text-blue-950 font-medium">
                    {user.login}
                  </span>
                  <NavLink
                    className="underline underline-offset-2 text-orange-500 hover:text-orange-600"
                    to={`/${user.login}/repos`}
                  >
                    View repos
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
