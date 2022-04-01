import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { DataMonth } from '../models';
import { DataMonthRepository } from '../repositories';
export declare class DataMonthController {
    dataMonthRepository: DataMonthRepository;
    constructor(dataMonthRepository: DataMonthRepository);
    create(dataMonth: Omit<DataMonth, 'id'>): Promise<DataMonth>;
    count(where?: Where<DataMonth>): Promise<Count>;
    find(filter?: Filter<DataMonth>): Promise<DataMonth[]>;
    updateAll(dataMonth: DataMonth, where?: Where<DataMonth>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<DataMonth>): Promise<DataMonth>;
    updateById(id: string, dataMonth: DataMonth): Promise<void>;
    replaceById(id: string, dataMonth: DataMonth): Promise<void>;
    deleteById(id: string): Promise<void>;
}
