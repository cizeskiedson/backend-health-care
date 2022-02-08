import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Mp, MpRelations} from '../models';

export class MpRepository extends DefaultCrudRepository<
  Mp,
  typeof Mp.prototype.id,
  MpRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Mp, dataSource);
  }
}
