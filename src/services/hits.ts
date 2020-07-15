import { getRepository } from 'typeorm';
import HitsModel from '../models/hits';
import UrlsModel from '../models/urls';


export default class HitsService {

    async statsGeneral() {
        const repository = getRepository(HitsModel);

        const searchUser = await repository.find()
        return {
            statusCode: 200,
            content: {
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
            }
        }
    }

    async statsUrls(id:string) {
        const repository = getRepository(UrlsModel);

        const searchUser = await repository.findOne({id: id, isActive: true});
        if (searchUser) {
            return {
                statusCode: 200,
                content: {
                    id: searchUser.id,
                    hits: searchUser.hits,
                    url: searchUser.url,
                    shortUrl: searchUser.shortUrl
                }
            }
        }

        return {
            statusCode: 404,
            content: { message: 'Url does not exist' }
        }
    }
}
