import { Express } from 'express';

export function configureViewEngine(app: Express) {
  // View engine setup

  app.set('views', __dirname);
  app.set('view engine', 'pug');
}
