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
import {Medico, Paciente} from '../models';
import {MedicoRepository} from '../repositories';
@authenticate('jwt')
export class MedicoPacienteController {
  constructor(
    @repository(MedicoRepository) protected medicoRepository: MedicoRepository,
  ) {}

  @get('/medicos/{id}/pacientes', {
    responses: {
      '200': {
        description: 'Array of Medico has many Paciente through Mp',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Paciente)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Paciente>,
  ): Promise<Paciente[]> {
    return this.medicoRepository.pacientes(id).find(filter);
  }

  @post('/medicos/{id}/pacientes', {
    responses: {
      '200': {
        description: 'create a Paciente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Paciente)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Medico.prototype.email,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Paciente, {
            title: 'NewPacienteInMedico',
            exclude: ['email'],
          }),
        },
      },
    })
    paciente: Omit<Paciente, 'email'>,
  ): Promise<Paciente> {
    return this.medicoRepository.pacientes(id).create(paciente);
  }

  @patch('/medicos/{id}/pacientes', {
    responses: {
      '200': {
        description: 'Medico.Paciente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Paciente, {partial: true}),
        },
      },
    })
    paciente: Partial<Paciente>,
    @param.query.object('where', getWhereSchemaFor(Paciente))
    where?: Where<Paciente>,
  ): Promise<Count> {
    return this.medicoRepository.pacientes(id).patch(paciente, where);
  }

  @del('/medicos/{id}/pacientes', {
    responses: {
      '200': {
        description: 'Medico.Paciente DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Paciente))
    where?: Where<Paciente>,
  ): Promise<Count> {
    return this.medicoRepository.pacientes(id).delete(where);
  }
}
