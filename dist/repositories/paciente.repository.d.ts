import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyThroughRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Paciente, PacienteRelations, Confianca, Pc } from '../models';
import { PcRepository } from './pc.repository';
import { ConfiancaRepository } from './confianca.repository';
export declare class PacienteRepository extends DefaultCrudRepository<Paciente, typeof Paciente.prototype.email, PacienteRelations> {
    protected pcRepositoryGetter: Getter<PcRepository>;
    protected confiancaRepositoryGetter: Getter<ConfiancaRepository>;
    readonly confiancas: HasManyThroughRepositoryFactory<Confianca, typeof Confianca.prototype.email, Pc, typeof Paciente.prototype.email>;
    constructor(dataSource: DbDataSource, pcRepositoryGetter: Getter<PcRepository>, confiancaRepositoryGetter: Getter<ConfiancaRepository>);
}
