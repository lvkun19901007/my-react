const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template/index.html'),
      filename: 'index.html',
      title: 'Nano'
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8080,
    open: true,
    hot: true,
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }
}