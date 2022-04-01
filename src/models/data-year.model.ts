import {Entity, model, property} from '@loopback/repository';

@model()
export class DataYear extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  stepsCurrentYear: string;

  @property({
    type: 'string',
    required: true,
  })
  fallCurrentYear: string;

  @property({
    type: 'string',
    required: true,
  })
  stepsLastYear: string;

  @property({
    type: 'string',
    required: true,
  })
  fallLastYear: string;

  @property({
    type: 'string',
  })
  emailPaciente?: string;

  constructor(data?: Partial<DataYear>) {
    super(data);
  }
}

export interface DataYearRelations {
  // describe navigational properties here
}

export type DataYearWithRelations = DataYear & DataYearRelations;
