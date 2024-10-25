import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Laravel API base URL

  withCredentials: false,
  // if i make this true, it will get error , like blocked by CORS policy
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
// Automatically add the token to request headers if it exists
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
