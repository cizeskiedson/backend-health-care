import { Entity } from '@loopback/repository';
export declare class DataMonth extends Entity {
    stepsCurrentMonth: string;
    fallCurrentMonth: string;
    stepsLastMonth: string;
    fallLastMonth: string;
    id?: string;
    emailPaciente?: string;
    constructor(data?: Partial<DataMonth>);
}
export interface DataMonthRelations {
}
export declare type DataMonthWithRelations = DataMonth & DataMonthRelations;
