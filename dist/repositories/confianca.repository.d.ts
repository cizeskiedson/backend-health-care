import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Confianca, ConfiancaRelations } from '../models';
export declare class ConfiancaRepository extends DefaultCrudRepository<Confianca, typeof Confianca.prototype.email, ConfiancaRelations> {
    constructor(dataSource: DbDataSource);
}
