import {Entity, model, property} from '@loopback/repository';

@model()
export class DataLastDay extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  steps: string;

  @property({
    type: 'string',
    required: true,
  })
  fall: string;

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

  constructor(data?: Partial<DataLastDay>) {
    super(data);
  }
}

export interface DataLastDayRelations {
  // describe navigational properties here
}

export type DataLastDayWithRelations = DataLastDay & DataLastDayRelations;
