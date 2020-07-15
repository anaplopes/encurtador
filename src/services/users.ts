import { getRepository } from 'typeorm';
import UsersModel from '../models/users';
import UrlsModel from '../models/urls';


export default class UsersService {

    async statsUsers(userid:string) {
        const repository = getRepository(UrlsModel);

        const searchUrl = await repository.find({user: userid});

        if (searchUrl) {
            const hits = await repository
            .createQueryBuilder('urls')
            .select('SUM(urls.hits)')
            .where('urls.user = :user', {user: userid})
            .andWhere('urls.isActive = true')
            .getRawOne(); // Quantidade de hits em todas as urls do usuario

            const urlCount = await repository.count({user: userid, isActive: true}); // Quantidade de urls cadastradas do usuario

            const topUrls = await repository
            .createQueryBuilder('urls')
            .select('urls.id, urls.hits, urls.url, urls.shortUrl')
            .where('urls.user = :user', {user: userid})
            .andWhere('urls.isActive = true')
            .orderBy('hits', 'DESC')
            .limit(10)
            .getRawMany(); // 10 Urls mais acessadas do usuario

            return {
            statusCode: 200,
            content: {
                hits: hits,
                urlCount: urlCount,
                topUrls: topUrls
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

        const searchUser = await repository.findOne({cpf: payload.cpf, isActive: true});
        if (searchUser) {
            return {
                statusCode: 409,
                content: { 
                    message: 'User already exists',
                    id: searchUser.id
                }
            }
        }

        const newUser = await repository.save(payload);
        return {
            statusCode: 201,
            content: {id: newUser.id }
        }
    }

    async deleteUsers(userid:string) {
        const repository = getRepository(UsersModel);

        const searchUser = await repository.findOne({id: userid, isActive: true});
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
