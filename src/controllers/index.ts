import { Router } from 'express';
import statusApiRouter from './statusApi';
import urlsRouter from './urls';
import usersRouter from './users';
import statsRouter from './stats';


const routes = Router();

routes.use('/', statusApiRouter);
routes.use('/urls', urlsRouter);
routes.use('/users', usersRouter);
routes.use('/stats', statsRouter);


export default routes;