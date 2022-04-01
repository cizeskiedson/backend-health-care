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
  DataLastDay,
} from '../models';
import {PacienteRepository} from '../repositories';

export class PacienteDataLastDayController {
  constructor(
    @repository(PacienteRepository) protected pacienteRepository: PacienteRepository,
  ) { }

  @get('/pacientes/{id}/data-last-day', {
    responses: {
      '200': {
        description: 'Paciente has one DataLastDay',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DataLastDay),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<DataLastDay>,
  ): Promise<DataLastDay> {
    return this.pacienteRepository.dataLastDay(id).get(filter);
  }

  @post('/pacientes/{id}/data-last-day', {
    responses: {
      '200': {
        description: 'Paciente model instance',
        content: {'application/json': {schema: getModelSchemaRef(DataLastDay)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Paciente.prototype.email,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataLastDay, {
            title: 'NewDataLastDayInPaciente',
            exclude: ['id'],
            optional: ['emailPaciente']
          }),
        },
      },
    }) dataLastDay: Omit<DataLastDay, 'id'>,
  ): Promise<DataLastDay> {
    return this.pacienteRepository.dataLastDay(id).create(dataLastDay);
  }

  @patch('/pacientes/{id}/data-last-day', {
    responses: {
      '200': {
        description: 'Paciente.DataLastDay PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataLastDay, {partial: true}),
        },
      },
    })
    dataLastDay: Partial<DataLastDay>,
    @param.query.object('where', getWhereSchemaFor(DataLastDay)) where?: Where<DataLastDay>,
  ): Promise<Count> {
    return this.pacienteRepository.dataLastDay(id).patch(dataLastDay, where);
  }

  @del('/pacientes/{id}/data-last-day', {
    responses: {
      '200': {
        description: 'Paciente.DataLastDay DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(DataLastDay)) where?: Where<DataLastDay>,
  ): Promise<Count> {
    return this.pacienteRepository.dataLastDay(id).delete(where);
  }
}
