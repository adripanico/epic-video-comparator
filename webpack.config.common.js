const path = require('path');

const PATHS = {
  entryPoint: path.resolve(__dirname, './src/index.ts'),
  bundle: path.resolve(__dirname, './dist/bundle'),
};

module.exports = {
  target: 'web',
  entry: {
    evc: [PATHS.entryPoint],
  },
  output: {
    path: PATHS.bundle,
    filename: 'index.min.js',
    libraryTarget: 'umd',
    library: 'evc',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
