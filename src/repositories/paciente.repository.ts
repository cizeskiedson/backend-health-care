import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Paciente, PacienteRelations, Confianca, Pc} from '../models';
import {PcRepository} from './pc.repository';
import {ConfiancaRepository} from './confianca.repository';

export class PacienteRepository extends DefaultCrudRepository<
  Paciente,
  typeof Paciente.prototype.email,
  PacienteRelations
> {

  public readonly confiancas: HasManyThroughRepositoryFactory<Confianca, typeof Confianca.prototype.email,
          Pc,
          typeof Paciente.prototype.email
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PcRepository') protected pcRepositoryGetter: Getter<PcRepository>, @repository.getter('ConfiancaRepository') protected confiancaRepositoryGetter: Getter<ConfiancaRepository>,
  ) {
    super(Paciente, dataSource);
    this.confiancas = this.createHasManyThroughRepositoryFactoryFor('confiancas', confiancaRepositoryGetter, pcRepositoryGetter,);
  }
}
