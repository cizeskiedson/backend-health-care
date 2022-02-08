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
import {Mp} from '../models';
import {MpRepository} from '../repositories';
@authenticate('jwt')
export class MpController {
  constructor(
    @repository(MpRepository)
    public mpRepository: MpRepository,
  ) {}

  @post('/mps')
  @response(200, {
    description: 'Mp model instance',
    content: {'application/json': {schema: getModelSchemaRef(Mp)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mp, {
            title: 'NewMp',
          }),
        },
      },
    })
    mp: Mp,
  ): Promise<Mp> {
    return this.mpRepository.create(mp);
  }

  @get('/mps/count')
  @response(200, {
    description: 'Mp model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Mp) where?: Where<Mp>): Promise<Count> {
    return this.mpRepository.count(where);
  }

  @get('/mps')
  @response(200, {
    description: 'Array of Mp model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Mp, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.filter(Mp) filter?: Filter<Mp>): Promise<Mp[]> {
    return this.mpRepository.find(filter);
  }

  @patch('/mps')
  @response(200, {
    description: 'Mp PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mp, {partial: true}),
        },
      },
    })
    mp: Mp,
    @param.where(Mp) where?: Where<Mp>,
  ): Promise<Count> {
    return this.mpRepository.updateAll(mp, where);
  }

  @get('/mps/{id}')
  @response(200, {
    description: 'Mp model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Mp, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Mp, {exclude: 'where'}) filter?: FilterExcludingWhere<Mp>,
  ): Promise<Mp> {
    return this.mpRepository.findById(id, filter);
  }

  @patch('/mps/{id}')
  @response(204, {
    description: 'Mp PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mp, {partial: true}),
        },
      },
    })
    mp: Mp,
  ): Promise<void> {
    await this.mpRepository.updateById(id, mp);
  }

  @put('/mps/{id}')
  @response(204, {
    description: 'Mp PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() mp: Mp,
  ): Promise<void> {
    await this.mpRepository.replaceById(id, mp);
  }

  @del('/mps/{id}')
  @response(204, {
    description: 'Mp DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.mpRepository.deleteById(id);
  }
}
