import { Entity } from '@loopback/repository';
import { Paciente } from './paciente.model';
export declare class Medico extends Entity {
    email: string;
    cpf: string;
    crm: string;
    name: string;
    phone?: string;
    area?: string;
    pacientes: Paciente[];
    constructor(data?: Partial<Medico>);
}
export interface MedicoRelations {
}
export declare type MedicoWithRelations = Medico & MedicoRelations;
