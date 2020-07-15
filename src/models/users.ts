import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('users')
export default class UsersModel {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 100, nullable: false})
    name: string;

    @Column({length: 12, nullable: false})
    cpf: string;

    @Column({default: true})
    isActive: boolean;

}