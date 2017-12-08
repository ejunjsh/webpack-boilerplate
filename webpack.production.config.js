var config = require('./w.config');

// production环境配置
module.exports = {
  devtool: config.devtool,
  entry: config.entry,
  output: {
    path: __dirname + '/build',
    filename: 'app-' + config.version+'.js',
  },
  module: {
    loaders: config.loaders
  },
  plugins: config.productionPlugins,
};
