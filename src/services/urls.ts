import shortid from 'shortid';
import UrlRepository from '../repositories/urls';
import HitsModel from '../models/hits';


export default class UrlsService {
    private repository: UrlRepository;

    constructor() {
        this.repository = new UrlRepository();
    }

    public createUrl(userid: string, url: string) {
        if (!userid || !url) {
            throw Error('I was expecting a url and a user, but apparently on (or both) is missing');
        }
        else {
            const domain = new URL(url);
            const shortId = shortid.generate();
            const obj = {
                id: '',
                url: url,
                shortUrl: `${domain.origin}/${shortId}`,
                ativo: true,
                user: userid,
                hits: 0
            };

            const created = this.repository.save(obj)
            return {
                id: obj.id,
                hits: obj.hits,
                url: obj.url,
                shortUrl: obj.shortUrl,
            };
        }
    }

    public getUrl(id: string) {
        const read = this.repository.find(id);
        if (read == undefined) {
            throw Error('Not Found');
        }
        else {
            return read;
        }
    }

    public deleteUrl(id: string) {
        const read = this.repository.find(id);
        if (read == undefined) {
            throw Error('Not Found');
        }
        else {
            const update = this.repository.update(id, {ativo: false});
            return 'Url successfully deleted';
        }
    }
}
