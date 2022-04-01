import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DataLastDay, DataLastDayRelations} from '../models';

export class DataLastDayRepository extends DefaultCrudRepository<
  DataLastDay,
  typeof DataLastDay.prototype.id,
  DataLastDayRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(DataLastDay, dataSource);
  }
}
