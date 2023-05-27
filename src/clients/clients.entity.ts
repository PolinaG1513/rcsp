import { Workers } from 'src/workers/workers.entity';
import { IsNumber, IsString } from "class-validator";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tours } from 'src/tours/tours.entity';

@Entity('clients')
export class Clients {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column({})
    fullname: string;

    @IsString()
    @Column()
    dateofbirth: string;

    @IsString()
    @Column()
    gender: string;

    @IsString()
    @Column()
    document:string;

    @IsNumber()
    @Column()
    telephone:number;

    @IsString()
    @Column()
    email: string;
    @ManyToMany((type)=> Workers, (workers) => workers.clients)
    @JoinTable({name: 'clients_workers',
                joinColumn: {name: 'clients_id'},
                inverseJoinColumn: {name: 'workers_id'},})
    workers: Workers[];

    @ManyToMany((type) => Tours, (tours) => tours.clients)
    @JoinTable({name: 'clients_tours',
              joinColumn: {name: 'clients_id'},
              inverseJoinColumn: {name: 'tours_id'},})
    tours: Tours[];
}