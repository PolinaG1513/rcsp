import { Workers } from 'src/workers/workers.entity';
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
  date: number;
  @Column()
  countdays: number;
  @Column()
  cost:number;
  @Column()
  country:string;
  @ManyToMany((type)=> Workers, (workers) => workers.tours)
  @JoinTable({name: 'tours_workers',
              joinColumn: {name: 'tours_id'},
              inverseJoinColumn: {name: 'tours_id'},})
  workers: Workers[];
}