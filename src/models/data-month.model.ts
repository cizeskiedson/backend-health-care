import {Entity, model, property} from '@loopback/repository';

@model()
export class DataMonth extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  stepsCurrentMonth: string;

  @property({
    type: 'string',
    required: true,
  })
  fallCurrentMonth: string;

  @property({
    type: 'string',
    required: true,
  })
  stepsLastMonth: string;

  @property({
    type: 'string',
    required: true,
  })
  fallLastMonth: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  emailPaciente?: string;

  constructor(data?: Partial<DataMonth>) {
    super(data);
  }
}

export interface DataMonthRelations {
  // describe navigational properties here
}

export type DataMonthWithRelations = DataMonth & DataMonthRelations;
