import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, EnvProvider, ErrorBoundary, Loading } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story: any) => (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <EnvProvider>
          <Router>
            <CssBaseline />
            <Story />
          </Router>
        </EnvProvider>
      </ErrorBoundary>
    </Suspense>
  ),
];
