import { Entity } from '@loopback/repository';
export declare class DataLastDay extends Entity {
    steps: string;
    fall: string;
    id?: string;
    emailPaciente?: string;
    constructor(data?: Partial<DataLastDay>);
}
export interface DataLastDayRelations {
}
export declare type DataLastDayWithRelations = DataLastDay & DataLastDayRelations;
