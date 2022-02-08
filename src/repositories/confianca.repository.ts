import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Confianca, ConfiancaRelations} from '../models';

export class ConfiancaRepository extends DefaultCrudRepository<
  Confianca,
  typeof Confianca.prototype.email,
  ConfiancaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Confianca, dataSource);
  }
}
