import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Medico, MedicoRelations, Paciente, Mp} from '../models';
import {MpRepository} from './mp.repository';
import {PacienteRepository} from './paciente.repository';

export class MedicoRepository extends DefaultCrudRepository<
  Medico,
  typeof Medico.prototype.email,
  MedicoRelations
> {

  public readonly pacientes: HasManyThroughRepositoryFactory<Paciente, typeof Paciente.prototype.email,
          Mp,
          typeof Medico.prototype.email
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('MpRepository')
    protected mpRepositoryGetter: Getter<MpRepository>,
    @repository.getter('PacienteRepository')
    protected pacienteRepositoryGetter: Getter<PacienteRepository>,
  ) {
    super(Medico, dataSource);
    this.pacientes = this.createHasManyThroughRepositoryFactoryFor('pacientes', pacienteRepositoryGetter, mpRepositoryGetter,);
    this.registerInclusionResolver('pacientes', this.pacientes.inclusionResolver);
  }
}
