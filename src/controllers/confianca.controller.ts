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
import {Confianca} from '../models';
import {ConfiancaRepository} from '../repositories';

@authenticate('jwt')
export class ConfiancaController {
  constructor(
    @repository(ConfiancaRepository)
    public confiancaRepository: ConfiancaRepository,
  ) {}

  @post('/confiancas')
  @response(200, {
    description: 'Confianca model instance',
    content: {'application/json': {schema: getModelSchemaRef(Confianca)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Confianca, {
            title: 'NewConfianca',
          }),
        },
      },
    })
    confianca: Confianca,
  ): Promise<Confianca> {
    return this.confiancaRepository.create(confianca);
  }

  @get('/confiancas/count')
  @response(200, {
    description: 'Confianca model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Confianca) where?: Where<Confianca>,
  ): Promise<Count> {
    return this.confiancaRepository.count(where);
  }

  @get('/confiancas')
  @response(200, {
    description: 'Array of Confianca model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Confianca, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Confianca) filter?: Filter<Confianca>,
  ): Promise<Confianca[]> {
    return this.confiancaRepository.find(filter);
  }

  @patch('/confiancas')
  @response(200, {
    description: 'Confianca PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Confianca, {partial: true}),
        },
      },
    })
    confianca: Confianca,
    @param.where(Confianca) where?: Where<Confianca>,
  ): Promise<Count> {
    return this.confiancaRepository.updateAll(confianca, where);
  }

  @get('/confiancas/{id}')
  @response(200, {
    description: 'Confianca model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Confianca, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Confianca, {exclude: 'where'})
    filter?: FilterExcludingWhere<Confianca>,
  ): Promise<Confianca> {
    return this.confiancaRepository.findById(id, filter);
  }

  @patch('/confiancas/{id}')
  @response(204, {
    description: 'Confianca PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Confianca, {partial: true}),
        },
      },
    })
    confianca: Confianca,
  ): Promise<void> {
    await this.confiancaRepository.updateById(id, confianca);
  }

  @put('/confiancas/{id}')
  @response(204, {
    description: 'Confianca PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() confianca: Confianca,
  ): Promise<void> {
    await this.confiancaRepository.replaceById(id, confianca);
  }

  @del('/confiancas/{id}')
  @response(204, {
    description: 'Confianca DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.confiancaRepository.deleteById(id);
  }
}
