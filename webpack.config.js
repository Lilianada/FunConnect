const path = require('path');

module.exports = {
  // other webpack configurations
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      os: require.resolve('os-browserify/browser'),
      util: require.resolve("util/")
    }
  },
  // other webpack configurations
}
