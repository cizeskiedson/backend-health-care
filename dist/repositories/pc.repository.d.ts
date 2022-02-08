import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Pc, PcRelations } from '../models';
export declare class PcRepository extends DefaultCrudRepository<Pc, typeof Pc.prototype.id, PcRelations> {
    constructor(dataSource: DbDataSource);
}
