import { getRepository } from 'typeorm';
import UrlsModel from '../models/urls';


export default class HitsService {

    async statsGeneral() {
        const repository = getRepository(UrlsModel);

        const hits = await repository
        .createQueryBuilder('urls')
        .select('SUM(urls.hits)')
        .where('urls.isActive = true')
        .getRawOne(); // Quantidade de hits em todas as urls do sistema
        
        const urlCount = await repository.count({isActive: true}); // Quantidade de urls cadastradas

        const topUrls = await repository
        .createQueryBuilder('urls')
        .select('urls.id, urls.hits, urls.url, urls.shortUrl')
        .where('urls.isActive = true')
        .orderBy('hits', 'DESC')
        .limit(10)
        .getRawMany(); // 10 Urls mais acessadas
        
        return {
            statusCode: 200,
            content: {
                hits: hits,
                urlCount: urlCount,
                topUrls: topUrls
            }
        }
    }

    async statsUrls(id:string) {
        const repository = getRepository(UrlsModel);

        const searchUrl = await repository.findOne({id: id, isActive: true});
        if (searchUrl) {
            return {
                statusCode: 200,
                content: {
                    id: searchUrl.id,
                    hits: searchUrl.hits,
                    url: searchUrl.url,
                    shortUrl: searchUrl.shortUrl
                }
            }
        }

        return {
            statusCode: 404,
            content: { message: 'Url does not exist' }
        }
    }
}
