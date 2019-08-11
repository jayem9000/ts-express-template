import { Express } from 'express';
import path from 'path';

export function configureViewEngine(app: Express) {
  // View engine setup

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
}
