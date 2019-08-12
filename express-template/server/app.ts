import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import { configureViewEngine } from './views/config';
import { configureRequestMiddleware } from './middleware/config';
import { configureRoutes } from './routes/config';

const app = express();

configureViewEngine(app);
configureRequestMiddleware(app);
configureRoutes(app);

// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404));
});

// Global error handler

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
