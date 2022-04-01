import { Entity } from '@loopback/repository';
import { Confianca } from './confianca.model';
import { DataLastDay } from './data-last-day.model';
import { DataMonth } from './data-month.model';
import { DataYear } from './data-year.model';
export declare class Paciente extends Entity {
    email: string;
    name: string;
    cpf: string;
    age?: string;
    address?: string;
    phone?: string;
    bloodType?: string;
    healthProblems?: string;
    weight?: string;
    height?: string;
    observations?: string;
    allergies?: string;
    confiancas: Confianca[];
    dataLastDay: DataLastDay;
    dataMonth: DataMonth;
    dataYear: DataYear;
    constructor(data?: Partial<Paciente>);
}
export interface PacienteRelations {
}
export declare type PacienteWithRelations = Paciente & PacienteRelations;
