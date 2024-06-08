import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'https://api.github.com';

// Create Axios instance with default configuration
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Adjust the timeout as needed
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
