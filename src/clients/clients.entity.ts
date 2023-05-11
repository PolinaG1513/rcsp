import { Workers } from 'src/workers/workers.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('clients')
export class Clients {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({})
    fullname: string;
    @Column()
    dateofbirth: string;
    @Column()
    gender: string;
    @Column()
    document:string;
    @Column()
    telephone:number;
    @Column()
    email: string;
    @ManyToMany((type)=> Workers, (workers) => workers.clients)
    @JoinTable({name: 'clients_workers',
                joinColumn: {name: 'clients_id'},
                inverseJoinColumn: {name: 'workers_id'},})
    workers: Workers[];
}