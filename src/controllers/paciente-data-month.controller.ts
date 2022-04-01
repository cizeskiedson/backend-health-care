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
  DataMonth,
} from '../models';
import {PacienteRepository} from '../repositories';

export class PacienteDataMonthController {
  constructor(
    @repository(PacienteRepository) protected pacienteRepository: PacienteRepository,
  ) { }

  @get('/pacientes/{id}/data-month', {
    responses: {
      '200': {
        description: 'Paciente has one DataMonth',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DataMonth),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<DataMonth>,
  ): Promise<DataMonth> {
    return this.pacienteRepository.dataMonth(id).get(filter);
  }

  @post('/pacientes/{id}/data-month', {
    responses: {
      '200': {
        description: 'Paciente model instance',
        content: {'application/json': {schema: getModelSchemaRef(DataMonth)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Paciente.prototype.email,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataMonth, {
            title: 'NewDataMonthInPaciente',
            exclude: ['id'],
            optional: ['emailPaciente']
          }),
        },
      },
    }) dataMonth: Omit<DataMonth, 'id'>,
  ): Promise<DataMonth> {
    return this.pacienteRepository.dataMonth(id).create(dataMonth);
  }

  @patch('/pacientes/{id}/data-month', {
    responses: {
      '200': {
        description: 'Paciente.DataMonth PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataMonth, {partial: true}),
        },
      },
    })
    dataMonth: Partial<DataMonth>,
    @param.query.object('where', getWhereSchemaFor(DataMonth)) where?: Where<DataMonth>,
  ): Promise<Count> {
    return this.pacienteRepository.dataMonth(id).patch(dataMonth, where);
  }

  @del('/pacientes/{id}/data-month', {
    responses: {
      '200': {
        description: 'Paciente.DataMonth DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(DataMonth)) where?: Where<DataMonth>,
  ): Promise<Count> {
    return this.pacienteRepository.dataMonth(id).delete(where);
  }
}
