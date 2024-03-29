import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import * as yup from 'yup';
import {
  CssBaseline,
  EnvProvider,
  ErrorBoundary,
  Loading,
} from '@react-test-shop-nx/ui-core';
import { App } from './App';
import './services/AxiosInterceptors';
import { yupLocale } from './utils';

// Start mock service worker
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
  worker.printHandlers();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// set up yup errors
yup.setLocale(yupLocale);

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <EnvProvider>
          <QueryClientProvider client={queryClient}>
            <Router>
              <CssBaseline />
              <App />
            </Router>
          </QueryClientProvider>
        </EnvProvider>
      </ErrorBoundary>
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
);
