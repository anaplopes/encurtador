import { uuid } from 'uuidv4';


export default class UsersModel {
    id: string;
    name: string;
    ativo: boolean;

    constructor({name, ativo}: Omit<UsersModel, 'id'>){
        this.id = uuid();
        this.name = name;
        this.ativo = ativo;
    }
}