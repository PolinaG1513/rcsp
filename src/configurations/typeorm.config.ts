import { DataSource } from "typeorm";

const ormConfig: DataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'education',
    username: 'postgres',
    password: 'root',
    entities: ['clients/clients.entity.ts',
    'workers/workers.entity.ts',
    'tours/tours.entity.ts' ],
    logging: true,
    synchronize: false,
    migrationsTableName: 'migrations',
    migrations: ['dist/src/migrations/*{.ts,.js}'],
});
export default ormConfig;

