const config = {
  collectCoverageFrom: ['./src/components/**', './src/pages/**'],
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
};

module.exports = config;
