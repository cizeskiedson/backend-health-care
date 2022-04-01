import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { DataYear } from '../models';
import { DataYearRepository } from '../repositories';
export declare class DataYearController {
    dataYearRepository: DataYearRepository;
    constructor(dataYearRepository: DataYearRepository);
    create(dataYear: Omit<DataYear, 'id'>): Promise<DataYear>;
    count(where?: Where<DataYear>): Promise<Count>;
    find(filter?: Filter<DataYear>): Promise<DataYear[]>;
    updateAll(dataYear: DataYear, where?: Where<DataYear>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<DataYear>): Promise<DataYear>;
    updateById(id: string, dataYear: DataYear): Promise<void>;
    replaceById(id: string, dataYear: DataYear): Promise<void>;
    deleteById(id: string): Promise<void>;
}
