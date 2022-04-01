import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { DataLastDay } from '../models';
import { DataLastDayRepository } from '../repositories';
export declare class DataLastDayController {
    dataLastDayRepository: DataLastDayRepository;
    constructor(dataLastDayRepository: DataLastDayRepository);
    create(dataLastDay: Omit<DataLastDay, 'id'>): Promise<DataLastDay>;
    count(where?: Where<DataLastDay>): Promise<Count>;
    find(filter?: Filter<DataLastDay>): Promise<DataLastDay[]>;
    updateAll(dataLastDay: DataLastDay, where?: Where<DataLastDay>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<DataLastDay>): Promise<DataLastDay>;
    updateById(id: string, dataLastDay: DataLastDay): Promise<void>;
    replaceById(id: string, dataLastDay: DataLastDay): Promise<void>;
    deleteById(id: string): Promise<void>;
}
