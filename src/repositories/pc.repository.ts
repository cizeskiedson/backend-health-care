import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Pc, PcRelations} from '../models';

export class PcRepository extends DefaultCrudRepository<
  Pc,
  typeof Pc.prototype.id,
  PcRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Pc, dataSource);
  }
}
