import {Entity, model, property} from '@loopback/repository';

@model()
export class Pc extends Entity {
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
  emailPaciente: string;

  @property({
    type: 'string',
    required: true,
  })
  emailConfianca: string;


  constructor(data?: Partial<Pc>) {
    super(data);
  }
}

export interface PcRelations {
  // describe navigational properties here
}

export type PcWithRelations = Pc & PcRelations;
