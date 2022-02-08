import { Entity } from '@loopback/repository';
export declare class Pc extends Entity {
    id?: string;
    emailPaciente: string;
    emailConfianca: string;
    constructor(data?: Partial<Pc>);
}
export interface PcRelations {
}
export declare type PcWithRelations = Pc & PcRelations;
