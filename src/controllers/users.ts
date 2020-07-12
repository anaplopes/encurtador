import { Router } from 'express';
import UrlsService from '../services/urls';


const usersRouter = Router();

usersRouter.post('/:userid/urls', (req, res) => {    
    try {
        const service = new UrlsService();
        const {userid} = req.params;
        const {url} = req.body;
        const response = service.createUrl(userid, url);
        res.status(201).json(response);
    }
    catch (err) {
        res.json({
            erro: err.message,
        });
    }
});


usersRouter.get('/:userid/stats', (req, res) => {
    // Retorna estatísticas das urls de um usuário. O resultado é o mesmo que GET /stats mas com o escopo dentro de um usuário
    // Caso o usuário não exista o retorno deverá ser com código 404 Not Found

    throw Error('Ainda não foi implementado.');
});


usersRouter.post('/', (req, res) => {
    // Cria um usuário. O conteúdo do request deverá ser com código 201 Created e retornar um objeto JSON com o conteúdo no seguinte formato. Caso já exista um usuário com o mesmo id retornar código 409 Conflict
    // {
    //     "id": "jibao"
    // }
        

    throw Error('Ainda não foi implementado.');
});


usersRouter.delete('/:userid', (req, res) => {
    // Apaga um usuário. :)
        
    throw Error('Ainda não foi implementado.');
});


export default usersRouter;