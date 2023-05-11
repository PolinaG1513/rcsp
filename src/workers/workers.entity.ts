import { Tours } from 'src/tours/tours.entity';
import { Clients } from 'src/clients/clients.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('workers')
export class Workers {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({})
    fullname: string;
    @Column()
    dateofbirth: number;
    @Column()
    position: string;
    @Column()
    education:string;
    @Column()
    telephone:number;
    @Column()
    salary: number;
    @ManyToMany((type)=> Clients, (clients) => clients.workers)
    @JoinTable({name: 'clients_workers',
                joinColumn: {name: 'workers_id'},
                inverseJoinColumn: {name: 'workers_id'},})
    clients: Clients[];
    @ManyToMany((type) => Tours, (tours) => tours.workers)
    @JoinTable({name: 'clients_tours',
                joinColumn: { name: 'clients_id' },
                inverseJoinColumn: { name: 'tours_id' },})
    tours: Tours[];
}