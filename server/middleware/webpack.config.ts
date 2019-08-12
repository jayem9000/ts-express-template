/**
 * This file will be imported through the server app.ts
 */
import { Configuration } from 'webpack';
import path from 'path';

type MyConfiguration = Configuration & {
  output: {
    path: string;
    publicPath: string;
    filename: string;
  };
};

const config: MyConfiguration = {
  mode: 'development',
  devtool: 'inline-source-map',

  entry: [path.resolve('client/index.ts')],

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  output: {
    path: path.join(__dirname, '../public/javascripts'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};

export default config;
