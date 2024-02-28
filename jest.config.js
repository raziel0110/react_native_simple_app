// import '@testing-library/jest-native/extend-expect';

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  "transformIgnorePatterns": [
    "node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)"
  ],
};
