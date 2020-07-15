import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';


@Entity('urls')
export default class UrlsModel {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    url: string;

    @Column({nullable: false})
    shortUrl: string;

    @Column({default: true})
    isActive: boolean;

    @Column({nullable: false})
    user: string;

    @Column({default: 0})
    hits: number;

    @CreateDateColumn({default: 'now()'})
    createdAt: Date; 

}