import {Module} from '@nestjs/common';
import {ClientsModule} from './clients/clients.module';
import {WorkersModule } from './workers/workers.module';
import {ToursModule} from './tours/tours.module';
import {TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ClientsModule, WorkersModule, ToursModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    port: 5432,
    username: 'education',
    password: 'password',
    host: 'localhost',
    synchronize: false,
    logging: 'all',
    entities: ['clients/clients.entity.ts',
    'workers/workers.entity.ts',
    'tours/tours.entity.ts' ],
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
