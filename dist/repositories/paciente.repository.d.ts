import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyThroughRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Paciente, PacienteRelations, Confianca, Pc, DataLastDay, DataMonth, DataYear } from '../models';
import { PcRepository } from './pc.repository';
import { ConfiancaRepository } from './confianca.repository';
import { DataLastDayRepository } from './data-last-day.repository';
import { DataMonthRepository } from './data-month.repository';
import { DataYearRepository } from './data-year.repository';
export declare class PacienteRepository extends DefaultCrudRepository<Paciente, typeof Paciente.prototype.email, PacienteRelations> {
    protected pcRepositoryGetter: Getter<PcRepository>;
    protected confiancaRepositoryGetter: Getter<ConfiancaRepository>;
    protected dataLastDayRepositoryGetter: Getter<DataLastDayRepository>;
    protected dataMonthRepositoryGetter: Getter<DataMonthRepository>;
    protected dataYearRepositoryGetter: Getter<DataYearRepository>;
    readonly confiancas: HasManyThroughRepositoryFactory<Confianca, typeof Confianca.prototype.email, Pc, typeof Paciente.prototype.email>;
    readonly dataLastDay: HasOneRepositoryFactory<DataLastDay, typeof Paciente.prototype.email>;
    readonly dataMonth: HasOneRepositoryFactory<DataMonth, typeof Paciente.prototype.email>;
    readonly dataYear: HasOneRepositoryFactory<DataYear, typeof Paciente.prototype.email>;
    constructor(dataSource: DbDataSource, pcRepositoryGetter: Getter<PcRepository>, confiancaRepositoryGetter: Getter<ConfiancaRepository>, dataLastDayRepositoryGetter: Getter<DataLastDayRepository>, dataMonthRepositoryGetter: Getter<DataMonthRepository>, dataYearRepositoryGetter: Getter<DataYearRepository>);
}
