import { Entity } from '@loopback/repository';
export declare class DataYear extends Entity {
    id?: string;
    stepsCurrentYear: string;
    fallCurrentYear: string;
    stepsLastYear: string;
    fallLastYear: string;
    emailPaciente?: string;
    constructor(data?: Partial<DataYear>);
}
export interface DataYearRelations {
}
export declare type DataYearWithRelations = DataYear & DataYearRelations;
