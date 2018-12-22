const path = require('path');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack: (config, options) => {
    // this enables absolute imports
    config.resolve.alias.components = path.join(__dirname, 'components');
    config.resolve.alias.utils = path.join(__dirname, 'utils');
    return config;
  }
});
