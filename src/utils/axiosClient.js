import axios from 'axios';

const { REACT_APP_BASE_URL, REACT_APP_AUTHORIZATION } = process.env;
const client = axios.create({ baseURL: REACT_APP_BASE_URL });

export default function request({ ...options }) {
  client.defaults.headers.common.Authorization = REACT_APP_AUTHORIZATION;
  const onSuccess = response => response;
  const onError = error => error;

  return client(options).then(onSuccess).catch(onError);
}
