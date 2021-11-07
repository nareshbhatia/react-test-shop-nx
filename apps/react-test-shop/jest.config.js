module.exports = {
  displayName: 'react-test-shop',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/react-test-shop',
};
