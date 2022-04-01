import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Paciente, PacienteRelations, Confianca, Pc, DataLastDay, DataMonth, DataYear} from '../models';
import {PcRepository} from './pc.repository';
import {ConfiancaRepository} from './confianca.repository';
import {DataLastDayRepository} from './data-last-day.repository';
import {DataMonthRepository} from './data-month.repository';
import {DataYearRepository} from './data-year.repository';

export class PacienteRepository extends DefaultCrudRepository<
  Paciente,
  typeof Paciente.prototype.email,
  PacienteRelations
> {

  public readonly confiancas: HasManyThroughRepositoryFactory<Confianca, typeof Confianca.prototype.email,
          Pc,
          typeof Paciente.prototype.email
        >;

  public readonly dataLastDay: HasOneRepositoryFactory<DataLastDay, typeof Paciente.prototype.email>;

  public readonly dataMonth: HasOneRepositoryFactory<DataMonth, typeof Paciente.prototype.email>;

  public readonly dataYear: HasOneRepositoryFactory<DataYear, typeof Paciente.prototype.email>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PcRepository') protected pcRepositoryGetter: Getter<PcRepository>, @repository.getter('ConfiancaRepository') protected confiancaRepositoryGetter: Getter<ConfiancaRepository>, @repository.getter('DataLastDayRepository') protected dataLastDayRepositoryGetter: Getter<DataLastDayRepository>, @repository.getter('DataMonthRepository') protected dataMonthRepositoryGetter: Getter<DataMonthRepository>, @repository.getter('DataYearRepository') protected dataYearRepositoryGetter: Getter<DataYearRepository>,
  ) {
    super(Paciente, dataSource);
    this.dataYear = this.createHasOneRepositoryFactoryFor('dataYear', dataYearRepositoryGetter);
    this.dataMonth = this.createHasOneRepositoryFactoryFor('dataMonth', dataMonthRepositoryGetter);
    this.dataLastDay = this.createHasOneRepositoryFactoryFor('dataLastDay', dataLastDayRepositoryGetter);
    this.confiancas = this.createHasManyThroughRepositoryFactoryFor('confiancas', confiancaRepositoryGetter, pcRepositoryGetter,);
  }
}
