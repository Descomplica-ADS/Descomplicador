import axios from 'axios';

const environments = {
  local: 'http://localhost:5000',
  development: 'https://descomplicador.herokuapp.com',
  production: 'https://descomplicador.herokuapp.com',
};

export const api = axios.create({
  baseURL: environments[process.env.REACT_APP_VERCEL_ENV || 'local'],
});
