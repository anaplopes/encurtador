import { Router } from 'express';
import UsersService from '../services/users';
import UrlsService from '../services/urls';


const usersRouter = Router();

usersRouter.get('/:userid/stats', async(req, res) => {
    // Get stats user

    try {
        const service = new UsersService();
        const {userid} = req.params;
        const response = await service.statsUsers(userid);
        res.status(response.statusCode).json(response.content);
    }
    catch (err) {
        res.json({
            erro: err.message,
        })
    }
});

usersRouter.post('/', async(req, res) => {
    // Create user

    try {
        const service = new UsersService();
        const response = await service.createUsers(req.body);
        res.status(response.statusCode).json(response.content);
    }
    catch (err) {
        res.json({
            erro: err.message,
        })
    }
});

usersRouter.delete('/:userid', async(req, res) => {
    // Delete user
        
    try {
        const service = new UsersService();
        const {userid} = req.params;
        const response = await service.deleteUsers(userid);
        res.status(response.statusCode).json(response.content);
    }
    catch (err) {
        console.log(err);
        res.json({
            erro: err.message,
        })
    }
});

usersRouter.post('/:userid/urls', async(req, res) => {    
    // Create url
    
    try {
        const service = new UrlsService();
        const {userid} = req.params;
        const {url} = req.body;
        const response = await service.createUrl(userid, url);
        res.status(response.statusCode).json(response.content);
    }
    catch (err) {
        console.log(err);
        res.json({
            erro: err.message,
        })
    }
});


export default usersRouter;