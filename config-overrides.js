const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  // Add webpack aliases
  addWebpackAlias({
    process: 'process/browser',
    Buffer: ['buffer', 'Buffer']
  }),
  
  // Add webpack plugins
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ),
  
  // Extend webpack configuration with additional fallbacks
  (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "process": require.resolve("process/browser"),
      "buffer": require.resolve("buffer"),
      "util": require.resolve("util/"),
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "fs": false,
    };
    return config;
  }
);

