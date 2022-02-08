import {Entity, model, property, hasMany} from '@loopback/repository';
import {Paciente} from './paciente.model';
import {Mp} from './mp.model';

@model()
export class Medico extends Entity {
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
  crm: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  area?: string;

  @hasMany(() => Paciente, {through: {model: () => Mp, keyFrom: 'emailMedico', keyTo: 'emailPaciente'}})
  pacientes: Paciente[];

  constructor(data?: Partial<Medico>) {
    super(data);
  }
}

export interface MedicoRelations {
  // describe navigational properties here
}

export type MedicoWithRelations = Medico & MedicoRelations;
