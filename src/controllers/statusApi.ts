import { Router } from 'express';


const { name, version } = require('../../package.json');
const startedDate: Date = new Date();
const statusApiRouter = Router();

statusApiRouter.get('/', (req, res) => {
    const uptime = (new Date().getTime() - startedDate.getTime()) / 1000;
    const obj = {
        name: name,
        version: version,
        started: startedDate,
        uptime: uptime
    };
    res.json(obj);
});


export default statusApiRouter;