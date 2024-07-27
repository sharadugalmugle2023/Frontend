// const webpack = require('webpack');

// module.exports = {
//   resolve: {
//     fallback: {
//       "process": require.resolve("process/browser"),
//       "buffer": require.resolve("buffer/")
//     }
//   },
//   plugins: [
//     new webpack.ProvidePlugin({
//       process: 'process/browser',
//       Buffer: ['buffer', 'Buffer']
//     }),
//   ],
// };





// const webpack = require('webpack');

// module.exports = {
//   resolve: {
//     fallback: {
//       "process": require.resolve("process/browser"),
//       "buffer": require.resolve("buffer"),
//       "util": require.resolve("util/"),
//       "stream": require.resolve("stream-browserify"),
//       "crypto": require.resolve("crypto-browserify"),
//       "http": require.resolve("stream-http"),
//       "https": require.resolve("https-browserify"),
//       "os": require.resolve("os-browserify/browser"),
//       "path": require.resolve("path-browserify"),
//       "fs": false,
//     }
//   },
//   plugins: [
//     new webpack.ProvidePlugin({
//       process: 'process/browser',
//       Buffer: ['buffer', 'Buffer']
//     }),
//   ],
// };


const webpack = require('webpack');

module.exports = {
  // other configurations...
  resolve: {
    fallback: {
      "process": require.resolve("process/browser"),
      "util": require.resolve("util/")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
