import { Entity } from '@loopback/repository';
export declare class Confianca extends Entity {
    email: string;
    cpf: string;
    name: string;
    phone?: string;
    constructor(data?: Partial<Confianca>);
}
export interface ConfiancaRelations {
}
export declare type ConfiancaWithRelations = Confianca & ConfiancaRelations;
