import api from '../api';

export const fetchTopUsersBySize = async (size: number = 10) => {
  const response = await api.get(
    `/search/users?q=followers:>1000&sort=followers&order=desc&per_page=${size}`
  );
  return response.data;
};

export const fetchUserBySearch = async (text: string) => {
  const response = await api.get(`/search/user?q=${text}`);
  return response.data;
};

export const fetchReposByUserName = async (userName: string) => {
  const response = await api.get(
    `/users/${userName}/repos?sort=created&direction=desc`
  );
  return response.data;
};

export const fetchRepoById = async (repositoryId: number) => {
  const response = await api.get(`/repositories/${repositoryId}`);
  return response.data;
};
