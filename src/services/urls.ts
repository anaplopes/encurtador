import shortid from 'shortid';
import { getRepository } from 'typeorm';
import UrlsModel from '../models/urls';


export default class UrlsService {

    async getUrls(id:string) {
        const repository = getRepository(UrlsModel);

        const searchUrl = await repository.findOne({id: id, isActive: true});
        if (searchUrl) {
            searchUrl.hits = searchUrl.hits + 1;
            await repository.save(searchUrl);
            return {
                statusCode: 301,
                content: searchUrl.url
            }
        }

        return {
            statusCode: 404,
            content: { message: 'Url does not exist' }
        }
    }

    async deleteUrls(id:string) {
        const repository = getRepository(UrlsModel);

        const searchUrl = await repository.findOne({id: id, isActive: true});
        if (searchUrl) {
            searchUrl.isActive = false;
            await repository.save(searchUrl);
            
            return {
                statusCode: 200,
                content: { message: 'Url successfully deleted' }
            }
        }

        return {
            statusCode: 404,
            content: { message: 'Url does not exist' }
        }
    }

    async createUrl(userid: string, url: string) {
        const repository = getRepository(UrlsModel);

        if (!userid || !url) {
            return {
                statusCode: 400,
                content: { message: 'I was expecting a url and a user, but apparently on (or both) is missing' }
            }
        }

        const searchUrl = await repository.findOne({url: url, isActive: true});
        if (searchUrl) {
            return {
                statusCode: 409,
                content: { 
                    message: 'Url already exists',
                    id: searchUrl.id 
                }
            }
        }

        const domain = new URL(url);
        const shortId = shortid.generate();
        const payload:any = {
            url: url,
            shortUrl: `${domain.origin}/${shortId}`,
            user: userid
        };

        const newUrl = await repository.save(payload);
        return {
            statusCode: 201,
            content: {
                id: newUrl.id,
                hits: newUrl.hits,
                url: newUrl.url,
                shortUrl: newUrl.shortUrl
            }
        }
    }
}
