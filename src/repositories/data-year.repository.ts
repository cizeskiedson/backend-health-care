import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DataYear, DataYearRelations} from '../models';

export class DataYearRepository extends DefaultCrudRepository<
  DataYear,
  typeof DataYear.prototype.id,
  DataYearRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(DataYear, dataSource);
  }
}
