import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from '../redux/types/types';
import { getReposByUserName } from '../redux/actions/repos/actions';

const Repos: React.FC = () => {
  const { userName } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (userName) {
      dispatch(getReposByUserName(userName));
    }
  }, [userName, dispatch]);
  return <p>Repos!!! {userName}</p>;
};

export default Repos;
