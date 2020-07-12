import { Router } from 'express';


const statsRouter = Router();

// Retorna estatísticas globais do sistema
statsRouter.get('/', (req, res) => {
    res.json({
            "hits": 193841,
            "urlCount": 2512,
            "topUrls": [
                {
                "id": "23094",
                "hits": 153,
                "url": "http://www.renault.com.br/folks", "shortUrl": "http://<host>[:<port>]/asdfeiba"
                },
                {
                "id": "23090",
                "hits": 89,
                "url": "http://www.chaordic.com.br/chaordic", "shortUrl": "http://<host>[:<port>]/asdfeiba"
                }
            ]
    });
});


statsRouter.get('/:id', (req, res) => {
    // Retorna estatísticas de uma URL específica
    // {
    //     "id": "23094", // ID da url
    //     "hits": 0, // Quantidade de hits nela
    //     "url": "http://www.renault.com.br/folks", // A url original
    //     "shortUrl": "http://short.url.com/asdfeiba" // A url curta formada
    // }
        

    throw Error('Ainda não foi implementado.');
});


export default statsRouter;