import { Clients } from 'src/clients/clients.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tours')  
export class Tours {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name: string;

  @Column()
  date: string;

  @Column()
  countdays: number;

  @Column()
  cost:number;

  @Column()
  country:string;
  @ManyToMany((type)=> Clients, (clients) => clients.tours)
  @JoinTable({name: 'tours_workers',
              joinColumn: {name: 'tours_id'},
              inverseJoinColumn: {name: 'clients_id'},})
  clients: Clients[];
}