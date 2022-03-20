import {Entity, model, property} from '@loopback/repository';

@model()
export class Mensagem extends Entity {
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
  subject: string;

  @property({
    type: 'string',
    required: true,
  })
  html: string;

  constructor(data?: Partial<Mensagem>) {
    super(data);
  }
}
