import { Router } from 'express';


const urlsRouter = Router();

urlsRouter.get('/:id', (req, res) => {
    // Deve retornar um 301 redirect para o endereço original da URL
    // Caso o id não existe no sistema, o retorno deverá ser um 404 Not Found

    throw Error('Ainda não foi implementado.');
});


urlsRouter.delete('/:id', (req, res) => {
    // Apaga uma URL do sistema (duh!). Deverá retornar vazio em caso de sucesso
    
    throw Error('Ainda não foi implementado.');
});


export default urlsRouter;