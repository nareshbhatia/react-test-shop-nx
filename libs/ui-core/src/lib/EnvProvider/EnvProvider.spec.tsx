import { render, screen } from '../test/test-utils';
import { EnvProvider, useEnv } from './EnvProvider';

// Set username in window environment
(window as any)._env_ = {
  USERNAME: 'John Smith',
};

const Child = () => {
  const env = useEnv();
  const username = env.get('USERNAME');
  return <div>Welcome {username}</div>;
};

describe('EnvContext', () => {
  it('return value if environment variable exists', () => {
    render(
      <EnvProvider>
        <Child />
      </EnvProvider>
    );
    expect(screen.getByText('Welcome John Smith')).toBeInTheDocument();
  });
});
