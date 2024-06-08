import React from 'react';
import { useParams } from 'react-router-dom';

const Repos: React.FC = () => {
  const { userName } = useParams();
  return <p>Repos!!! {userName}</p>;
};

export default Repos;
