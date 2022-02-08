import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyThroughRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Medico, MedicoRelations, Paciente, Mp } from '../models';
import { MpRepository } from './mp.repository';
import { PacienteRepository } from './paciente.repository';
export declare class MedicoRepository extends DefaultCrudRepository<Medico, typeof Medico.prototype.email, MedicoRelations> {
    protected mpRepositoryGetter: Getter<MpRepository>;
    protected pacienteRepositoryGetter: Getter<PacienteRepository>;
    readonly pacientes: HasManyThroughRepositoryFactory<Paciente, typeof Paciente.prototype.email, Mp, typeof Medico.prototype.email>;
    constructor(dataSource: DbDataSource, mpRepositoryGetter: Getter<MpRepository>, pacienteRepositoryGetter: Getter<PacienteRepository>);
}
