import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import configFile from './webpack.config';

export function configureRequestMiddleware(app: Express) {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  // serves static files at the root
  app.use(express.static(path.join(__dirname, 'public')));

  configureWebpack(app);
}

function configureWebpack(app: Express) {
  const compiler = webpack(configFile);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: configFile.output!.publicPath!
    })
  );
}
