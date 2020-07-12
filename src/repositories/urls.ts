import UrlsModel from '../models/urls';


export default class UrlsRepository {
    
    public save(url: UrlsModel) {
        let db = [];

        db.push(url);
        return db;
    }

    public find(id: string) {
    }

    public findAll(id: string) {
    }

    public update(id: string, data: {}) {
    }
}