import { Entity } from '@loopback/repository';
export declare class Mp extends Entity {
    id?: string;
    emailMedico: string;
    emailPaciente: string;
    constructor(data?: Partial<Mp>);
}
export interface MpRelations {
}
export declare type MpWithRelations = Mp & MpRelations;
