var config = require('./w.config');

// dev环境配置
module.exports = {
  devtool: config.devtool,
  entry: config.entry,
  output: {
    path: __dirname + '/',
    filename: 'app.js',
  },
  module: {
    loaders: config.loaders
  },
  plugins: config.devPlugins,
  devServer: config.devServer
};
