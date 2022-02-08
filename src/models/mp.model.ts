import {Entity, model, property} from '@loopback/repository';

@model()
export class Mp extends Entity {
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
  emailMedico: string;

  @property({
    type: 'string',
    required: true,
  })
  emailPaciente: string;


  constructor(data?: Partial<Mp>) {
    super(data);
  }
}

export interface MpRelations {
  // describe navigational properties here
}

export type MpWithRelations = Mp & MpRelations;
