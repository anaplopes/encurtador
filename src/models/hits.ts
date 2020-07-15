import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';


@Entity('hits')
export default class HitsModel {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    url: string;

    @Column()
    shortUrl: string;

    @Column()
    user: string;
    
    @CreateDateColumn({default: 'now()'})
    createdAt: Date;

}