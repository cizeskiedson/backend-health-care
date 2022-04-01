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
import {DataMonth} from '../models';
import {DataMonthRepository} from '../repositories';

export class DataMonthController {
  constructor(
    @repository(DataMonthRepository)
    public dataMonthRepository : DataMonthRepository,
  ) {}

  @post('/data-month')
  @response(200, {
    description: 'DataMonth model instance',
    content: {'application/json': {schema: getModelSchemaRef(DataMonth)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataMonth, {
            title: 'NewDataMonth',
            exclude: ['id'],
          }),
        },
      },
    })
    dataMonth: Omit<DataMonth, 'id'>,
  ): Promise<DataMonth> {
    return this.dataMonthRepository.create(dataMonth);
  }

  @get('/data-month/count')
  @response(200, {
    description: 'DataMonth model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DataMonth) where?: Where<DataMonth>,
  ): Promise<Count> {
    return this.dataMonthRepository.count(where);
  }

  @get('/data-month')
  @response(200, {
    description: 'Array of DataMonth model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DataMonth, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DataMonth) filter?: Filter<DataMonth>,
  ): Promise<DataMonth[]> {
    return this.dataMonthRepository.find(filter);
  }

  @patch('/data-month')
  @response(200, {
    description: 'DataMonth PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataMonth, {partial: true}),
        },
      },
    })
    dataMonth: DataMonth,
    @param.where(DataMonth) where?: Where<DataMonth>,
  ): Promise<Count> {
    return this.dataMonthRepository.updateAll(dataMonth, where);
  }

  @get('/data-month/{id}')
  @response(200, {
    description: 'DataMonth model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DataMonth, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DataMonth, {exclude: 'where'}) filter?: FilterExcludingWhere<DataMonth>
  ): Promise<DataMonth> {
    return this.dataMonthRepository.findById(id, filter);
  }

  @patch('/data-month/{id}')
  @response(204, {
    description: 'DataMonth PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataMonth, {partial: true}),
        },
      },
    })
    dataMonth: DataMonth,
  ): Promise<void> {
    await this.dataMonthRepository.updateById(id, dataMonth);
  }

  @put('/data-month/{id}')
  @response(204, {
    description: 'DataMonth PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() dataMonth: DataMonth,
  ): Promise<void> {
    await this.dataMonthRepository.replaceById(id, dataMonth);
  }

  @del('/data-month/{id}')
  @response(204, {
    description: 'DataMonth DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.dataMonthRepository.deleteById(id);
  }
}
