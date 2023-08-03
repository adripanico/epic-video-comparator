const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.config.common');

const prod = {
  ...commonConfig,
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

module.exports = prod;
