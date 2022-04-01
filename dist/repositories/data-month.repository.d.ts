import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { DataMonth, DataMonthRelations } from '../models';
export declare class DataMonthRepository extends DefaultCrudRepository<DataMonth, typeof DataMonth.prototype.id, DataMonthRelations> {
    constructor(dataSource: DbDataSource);
}
