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
import {
  Paciente,
  DataYear,
} from '../models';
import {PacienteRepository} from '../repositories';

export class PacienteDataYearController {
  constructor(
    @repository(PacienteRepository) protected pacienteRepository: PacienteRepository,
  ) { }

  @get('/pacientes/{id}/data-year', {
    responses: {
      '200': {
        description: 'Paciente has one DataYear',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DataYear),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<DataYear>,
  ): Promise<DataYear> {
    return this.pacienteRepository.dataYear(id).get(filter);
  }

  @post('/pacientes/{id}/data-year', {
    responses: {
      '200': {
        description: 'Paciente model instance',
        content: {'application/json': {schema: getModelSchemaRef(DataYear)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Paciente.prototype.email,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataYear, {
            title: 'NewDataYearInPaciente',
            exclude: ['id'],
            optional: ['emailPaciente']
          }),
        },
      },
    }) dataYear: Omit<DataYear, 'id'>,
  ): Promise<DataYear> {
    return this.pacienteRepository.dataYear(id).create(dataYear);
  }

  @patch('/pacientes/{id}/data-year', {
    responses: {
      '200': {
        description: 'Paciente.DataYear PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataYear, {partial: true}),
        },
      },
    })
    dataYear: Partial<DataYear>,
    @param.query.object('where', getWhereSchemaFor(DataYear)) where?: Where<DataYear>,
  ): Promise<Count> {
    return this.pacienteRepository.dataYear(id).patch(dataYear, where);
  }

  @del('/pacientes/{id}/data-year', {
    responses: {
      '200': {
        description: 'Paciente.DataYear DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(DataYear)) where?: Where<DataYear>,
  ): Promise<Count> {
    return this.pacienteRepository.dataYear(id).delete(where);
  }
}
