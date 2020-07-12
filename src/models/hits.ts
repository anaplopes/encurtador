import { uuid } from 'uuidv4';


export default class HitsModel {
    id: string;
    url: string;
    shortUrl: string;
    user: string;

    constructor({url, shortUrl, user}: Omit<HitsModel, 'id'>){
        this.id = uuid();
        this.url = url;
        this.shortUrl = shortUrl;
        this.user = user;
    }
}