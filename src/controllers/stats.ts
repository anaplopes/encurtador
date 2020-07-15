import { Router } from 'express';
import HitsService from '../services/hits';


const statsRouter = Router();

statsRouter.get('/', async(req, res) => {
    // Statistic general

    try {
        const service = new HitsService();
        const response = await service.statsGeneral();
        res.status(response.statusCode).json(response.content);
    }
    catch (err) {
        res.json({
            erro: err.message,
        })
    }
});


statsRouter.get('/:id', async(req, res) => {
    // Statistic url
    
    try {
        const service = new HitsService();
        const {id} = req.params;
        const response = await service.statsUrls(id);
        res.status(response.statusCode).json(response.content);
    }
    catch (err) {
        res.json({
            erro: err.message,
        })
    }
});


export default statsRouter;