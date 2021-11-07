import axios from 'axios';
import { WindowEnv } from '@react-test-shop-nx/ui-core';
import { EnvVar } from '../utils';

// ----- Axios interceptor to configure all requests -----
axios.interceptors.request.use(async (config) => {
  // configure baseURL
  const env = new WindowEnv();
  config.baseURL = env.get(EnvVar.API_URL);

  return config;
});
