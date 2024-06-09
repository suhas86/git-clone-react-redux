import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch } from '../redux/types/types';
import {
  getReposBySearch,
  getReposByUserName,
} from '../redux/actions/repos/actions';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/reducers';
import Loading from '../components/Loading';
import Error from '../components/Error';
import SearchBox from '../components/SearchBox';

const Repos: React.FC = () => {
  const { userName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { repos, error, loading } = useSelector(
    (state: AppState) => state.repos
  );
  useEffect(() => {
    if (userName) {
      dispatch(getReposByUserName(userName));
    }
  }, [userName, dispatch]);
  const handleSearch = (query: string) => {
    if (!userName) return;
    if (query) {
      dispatch(getReposBySearch(userName, query));
    } else {
      dispatch(getReposByUserName(userName));
    }
  };
  return (
    <>
      <div className="flex justify-center mb-6">
        <div className="w-2/3">
          <SearchBox placeholder="Search repos..." onSearch={handleSearch} />
        </div>
      </div>
      <div className="my-2 flex">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-2 py-1 border-none 
          text-blue-500 text-sm font-medium rounded-md  
          hover:text-blue-900 focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <span className="text-orange-500 text-lg font-semibold">
          Public repositories by {userName}
        </span>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <ul className="space-y-4">
          {repos?.map((repo) => (
            <li
              key={repo.id}
              className="p-4 border rounded shadow hover:shadow-lg transition-shadow"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <h2 className="text-xl font-semibold">{repo.name}</h2>
              </a>
              <p className="text-gray-700">{repo.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Repos;
