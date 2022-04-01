import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {DataYear} from '../models';
import {DataYearRepository} from '../repositories';

export class DataYearController {
  constructor(
    @repository(DataYearRepository)
    public dataYearRepository : DataYearRepository,
  ) {}

  @post('/data-year')
  @response(200, {
    description: 'DataYear model instance',
    content: {'application/json': {schema: getModelSchemaRef(DataYear)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataYear, {
            title: 'NewDataYear',
            exclude: ['id'],
          }),
        },
      },
    })
    dataYear: Omit<DataYear, 'id'>,
  ): Promise<DataYear> {
    return this.dataYearRepository.create(dataYear);
  }

  @get('/data-year/count')
  @response(200, {
    description: 'DataYear model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DataYear) where?: Where<DataYear>,
  ): Promise<Count> {
    return this.dataYearRepository.count(where);
  }

  @get('/data-year')
  @response(200, {
    description: 'Array of DataYear model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DataYear, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DataYear) filter?: Filter<DataYear>,
  ): Promise<DataYear[]> {
    return this.dataYearRepository.find(filter);
  }

  @patch('/data-year')
  @response(200, {
    description: 'DataYear PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataYear, {partial: true}),
        },
      },
    })
    dataYear: DataYear,
    @param.where(DataYear) where?: Where<DataYear>,
  ): Promise<Count> {
    return this.dataYearRepository.updateAll(dataYear, where);
  }

  @get('/data-year/{id}')
  @response(200, {
    description: 'DataYear model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DataYear, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DataYear, {exclude: 'where'}) filter?: FilterExcludingWhere<DataYear>
  ): Promise<DataYear> {
    return this.dataYearRepository.findById(id, filter);
  }

  @patch('/data-year/{id}')
  @response(204, {
    description: 'DataYear PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataYear, {partial: true}),
        },
      },
    })
    dataYear: DataYear,
  ): Promise<void> {
    await this.dataYearRepository.updateById(id, dataYear);
  }

  @put('/data-year/{id}')
  @response(204, {
    description: 'DataYear PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() dataYear: DataYear,
  ): Promise<void> {
    await this.dataYearRepository.replaceById(id, dataYear);
  }

  @del('/data-year/{id}')
  @response(204, {
    description: 'DataYear DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.dataYearRepository.deleteById(id);
  }
}
