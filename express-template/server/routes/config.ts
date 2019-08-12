import { Express } from 'express';
import indexRouter from './main';
import usersRouter from './users';

export function configureRoutes(app: Express) {
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
}
