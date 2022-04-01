import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { DataLastDay, DataLastDayRelations } from '../models';
export declare class DataLastDayRepository extends DefaultCrudRepository<DataLastDay, typeof DataLastDay.prototype.id, DataLastDayRelations> {
    constructor(dataSource: DbDataSource);
}
