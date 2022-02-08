import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Mp, MpRelations } from '../models';
export declare class MpRepository extends DefaultCrudRepository<Mp, typeof Mp.prototype.id, MpRelations> {
    constructor(dataSource: DbDataSource);
}
