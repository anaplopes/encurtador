import { getRepository } from 'typeorm';
import UsersModel from '../models/users';


export default class UsersService {

    async statsUsers(userid:string) {
        const repository = getRepository(UsersModel);

        const searchUser = await repository.findOne({id: userid, isActive: true})
        if (searchUser) {
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

        return {
            statusCode: 404,
            content: { message: 'User does not exist' }
        }
    }

    async createUsers(payload:any) {
        const repository = getRepository(UsersModel);

        const searchUser = await repository.findOne({cpf: payload.cpf, isActive: true})
        if (searchUser) {
            return {
                statusCode: 409,
                content: { 
                    message: 'User already exists',
                    id: searchUser.id
                }
            }
        }

        const newUser = await repository.save(payload)
        return {
            statusCode: 201,
            content: {id: newUser.id }
        }
    }

    async deleteUsers(userid:string) {
        const repository = getRepository(UsersModel);

        const searchUser = await repository.findOne({id: userid, isActive: true})
        if (searchUser) {
            searchUser.isActive = false;
            await repository.save(searchUser);
            
            return {
                statusCode: 200,
                content: { message: 'User successfully deleted' }
            }
        }
        
        return {
            statusCode: 404,
            content: { message: 'User does not exist' }
        }
    }

}
