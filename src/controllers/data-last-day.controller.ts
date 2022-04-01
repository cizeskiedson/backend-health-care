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
import {DataLastDay} from '../models';
import {DataLastDayRepository} from '../repositories';

export class DataLastDayController {
  constructor(
    @repository(DataLastDayRepository)
    public dataLastDayRepository : DataLastDayRepository,
  ) {}

  @post('/data-last-day')
  @response(200, {
    description: 'DataLastDay model instance',
    content: {'application/json': {schema: getModelSchemaRef(DataLastDay)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataLastDay, {
            title: 'NewDataLastDay',
            exclude: ['id'],
          }),
        },
      },
    })
    dataLastDay: Omit<DataLastDay, 'id'>,
  ): Promise<DataLastDay> {
    return this.dataLastDayRepository.create(dataLastDay);
  }

  @get('/data-last-day/count')
  @response(200, {
    description: 'DataLastDay model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DataLastDay) where?: Where<DataLastDay>,
  ): Promise<Count> {
    return this.dataLastDayRepository.count(where);
  }

  @get('/data-last-day')
  @response(200, {
    description: 'Array of DataLastDay model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DataLastDay, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DataLastDay) filter?: Filter<DataLastDay>,
  ): Promise<DataLastDay[]> {
    return this.dataLastDayRepository.find(filter);
  }

  @patch('/data-last-day')
  @response(200, {
    description: 'DataLastDay PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataLastDay, {partial: true}),
        },
      },
    })
    dataLastDay: DataLastDay,
    @param.where(DataLastDay) where?: Where<DataLastDay>,
  ): Promise<Count> {
    return this.dataLastDayRepository.updateAll(dataLastDay, where);
  }

  @get('/data-last-day/{id}')
  @response(200, {
    description: 'DataLastDay model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DataLastDay, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DataLastDay, {exclude: 'where'}) filter?: FilterExcludingWhere<DataLastDay>
  ): Promise<DataLastDay> {
    return this.dataLastDayRepository.findById(id, filter);
  }

  @patch('/data-last-day/{id}')
  @response(204, {
    description: 'DataLastDay PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataLastDay, {partial: true}),
        },
      },
    })
    dataLastDay: DataLastDay,
  ): Promise<void> {
    await this.dataLastDayRepository.updateById(id, dataLastDay);
  }

  @put('/data-last-day/{id}')
  @response(204, {
    description: 'DataLastDay PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() dataLastDay: DataLastDay,
  ): Promise<void> {
    await this.dataLastDayRepository.replaceById(id, dataLastDay);
  }

  @del('/data-last-day/{id}')
  @response(204, {
    description: 'DataLastDay DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.dataLastDayRepository.deleteById(id);
  }
}
