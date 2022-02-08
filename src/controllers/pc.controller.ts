import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Pc} from '../models';
import {PcRepository} from '../repositories';
@authenticate('jwt')
export class PcController {
  constructor(
    @repository(PcRepository)
    public pcRepository: PcRepository,
  ) {}

  @post('/pcs')
  @response(200, {
    description: 'Pc model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pc)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pc, {
            title: 'NewPc',
          }),
        },
      },
    })
    pc: Pc,
  ): Promise<Pc> {
    return this.pcRepository.create(pc);
  }

  @get('/pcs/count')
  @response(200, {
    description: 'Pc model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Pc) where?: Where<Pc>): Promise<Count> {
    return this.pcRepository.count(where);
  }

  @get('/pcs')
  @response(200, {
    description: 'Array of Pc model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pc, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.filter(Pc) filter?: Filter<Pc>): Promise<Pc[]> {
    return this.pcRepository.find(filter);
  }

  @patch('/pcs')
  @response(200, {
    description: 'Pc PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pc, {partial: true}),
        },
      },
    })
    pc: Pc,
    @param.where(Pc) where?: Where<Pc>,
  ): Promise<Count> {
    return this.pcRepository.updateAll(pc, where);
  }

  @get('/pcs/{id}')
  @response(200, {
    description: 'Pc model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pc, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Pc, {exclude: 'where'}) filter?: FilterExcludingWhere<Pc>,
  ): Promise<Pc> {
    return this.pcRepository.findById(id, filter);
  }

  @patch('/pcs/{id}')
  @response(204, {
    description: 'Pc PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pc, {partial: true}),
        },
      },
    })
    pc: Pc,
  ): Promise<void> {
    await this.pcRepository.updateById(id, pc);
  }

  @put('/pcs/{id}')
  @response(204, {
    description: 'Pc PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() pc: Pc,
  ): Promise<void> {
    await this.pcRepository.replaceById(id, pc);
  }

  @del('/pcs/{id}')
  @response(204, {
    description: 'Pc DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.pcRepository.deleteById(id);
  }
}
