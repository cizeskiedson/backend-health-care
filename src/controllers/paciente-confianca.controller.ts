import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {Confianca, Paciente} from '../models';
import {PacienteRepository} from '../repositories';
@authenticate('jwt')
export class PacienteConfiancaController {
  constructor(
    @repository(PacienteRepository)
    protected pacienteRepository: PacienteRepository,
  ) {}

  @get('/pacientes/{id}/confiancas', {
    responses: {
      '200': {
        description: 'Array of Paciente has many Confianca through Pc',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Confianca)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Confianca>,
  ): Promise<Confianca[]> {
    return this.pacienteRepository.confiancas(id).find(filter);
  }

  @post('/pacientes/{id}/confiancas', {
    responses: {
      '200': {
        description: 'create a Confianca model instance',
        content: {'application/json': {schema: getModelSchemaRef(Confianca)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Paciente.prototype.email,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Confianca, {
            title: 'NewConfiancaInPaciente',
            exclude: ['email'],
          }),
        },
      },
    })
    confianca: Omit<Confianca, 'email'>,
  ): Promise<Confianca> {
    return this.pacienteRepository.confiancas(id).create(confianca);
  }

  @patch('/pacientes/{id}/confiancas', {
    responses: {
      '200': {
        description: 'Paciente.Confianca PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Confianca, {partial: true}),
        },
      },
    })
    confianca: Partial<Confianca>,
    @param.query.object('where', getWhereSchemaFor(Confianca))
    where?: Where<Confianca>,
  ): Promise<Count> {
    return this.pacienteRepository.confiancas(id).patch(confianca, where);
  }

  @del('/pacientes/{id}/confiancas', {
    responses: {
      '200': {
        description: 'Paciente.Confianca DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Confianca))
    where?: Where<Confianca>,
  ): Promise<Count> {
    return this.pacienteRepository.confiancas(id).delete(where);
  }
}
