import {Entity, model, property} from '@loopback/repository';

@model()
export class Confianca extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  cpf: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  phone?: string;


  constructor(data?: Partial<Confianca>) {
    super(data);
  }
}

export interface ConfiancaRelations {
  // describe navigational properties here
}

export type ConfiancaWithRelations = Confianca & ConfiancaRelations;
