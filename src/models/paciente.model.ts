import {Entity, hasMany, model, property} from '@loopback/repository';
import {Confianca} from './confianca.model';
import {Pc} from './pc.model';

@model()
export class Paciente extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  cpf: string;

  @property({
    type: 'string',
  })
  age?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'date',
  })
  birthDate?: string;

  @property({
    type: 'string',
  })
  bloodType?: string;

  @property({
    type: 'string',
  })
  healthProblems?: string;

  @property({
    type: 'string',
  })
  weight?: string;

  @property({
    type: 'string',
  })
  height?: string;

  @property({
    type: 'string',
  })
  observations?: string;

  @property({
    type: 'string',
  })
  allergies?: string;

  @hasMany(() => Confianca, {
    through: {
      model: () => Pc,
      keyFrom: 'emailPaciente',
      keyTo: 'emailConfianca',
    },
  })
  confiancas: Confianca[];

  constructor(data?: Partial<Paciente>) {
    super(data);
  }
}

export interface PacienteRelations {
  // describe navigational properties here
}

export type PacienteWithRelations = Paciente & PacienteRelations;
