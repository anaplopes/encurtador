import { uuid } from 'uuidv4';


export default class UrlsModel {
    id: string;
    url: string;
    shortUrl: string;
    ativo: boolean;
    user: string;
    hits: number;

    constructor({url, shortUrl, ativo, user, hits}: Omit<UrlsModel, 'id'>){
        this.id = uuid();
        this.url = url;
        this.shortUrl = shortUrl;
        this.ativo = ativo;
        this.user = user;
        this.hits = hits;
    }
}