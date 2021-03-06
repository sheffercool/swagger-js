const unitConfig = require('./jest.unit.config');

module.exports = {
  ...unitConfig,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    './src/': {
      branches: 87,
      functions: 91,
      lines: 90,
      statements: 90,
    },
  },
};
