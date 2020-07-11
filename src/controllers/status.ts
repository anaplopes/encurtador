import { Route } from 'express';
const { name, version } = require('../../package.json');
const startedDate: Date = new Date();


export class StatusRoutes extends Route {
    constructor() {
        const routePath = '/';
        super(routePath);
    }

    public async statusApi() {
        const uptime = (new Date().getTime() - startedDate.getTime()) / 1000;
        const obj = {
            name: name,
            version: version,
            started: startedDate,
            uptime: uptime
        };
        return obj;
    }
}