import { Entity } from '@loopback/repository';
import { Confianca } from './confianca.model';
export declare class Paciente extends Entity {
    email: string;
    cpf: string;
    age?: string;
    address?: string;
    phone?: string;
    birthDate?: string;
    bloodType?: string;
    healthProblems?: string;
    weight?: string;
    height?: string;
    observations?: string;
    allergies?: string;
    confiancas: Confianca[];
    constructor(data?: Partial<Paciente>);
}
export interface PacienteRelations {
}
export declare type PacienteWithRelations = Paciente & PacienteRelations;
