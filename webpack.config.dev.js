const commonConfig = require('./webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dev = {
  ...commonConfig,
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './index.html',
      filename: './index.html',
    }),
  ],
};

module.exports = dev;
