import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { DataYear, DataYearRelations } from '../models';
export declare class DataYearRepository extends DefaultCrudRepository<DataYear, typeof DataYear.prototype.id, DataYearRelations> {
    constructor(dataSource: DbDataSource);
}
