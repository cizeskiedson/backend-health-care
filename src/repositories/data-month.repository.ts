import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DataMonth, DataMonthRelations} from '../models';

export class DataMonthRepository extends DefaultCrudRepository<
  DataMonth,
  typeof DataMonth.prototype.id,
  DataMonthRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(DataMonth, dataSource);
  }
}
