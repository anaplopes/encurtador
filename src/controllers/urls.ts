import { Router } from 'express';
import UrlsService from '../services/urls';


const urlsRouter = Router();

urlsRouter.get('/:id', async(req, res, next) => {
    // Redirect original url

    try {
        const {id} = req.params;
        const service = new UrlsService();
        const response = await service.getUrls(id);
        if (response.statusCode == 301) {
            const url:any = response.content
            res.redirect(response.statusCode, url)
        } else {
            res.status(response.statusCode).json(response.content);
        }
    }
    catch (err) {
        console.log(err);
        res.json({
            erro: err.message,
        })
    }
});


urlsRouter.delete('/:id', async(req, res) => {
    // Delete url
    
    try {
        const service = new UrlsService();
        const {id} = req.params;
        const response = await service.deleteUrls(id);
        res.status(response.statusCode).json(response.content);
    }
    catch (err) {
        console.log(err);
        res.json({
            erro: err.message,
        })
    }
});


export default urlsRouter;