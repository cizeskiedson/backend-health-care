import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Mp } from '../models';
import { MpRepository } from '../repositories';
export declare class MpController {
    mpRepository: MpRepository;
    constructor(mpRepository: MpRepository);
    create(mp: Mp): Promise<Mp>;
    count(where?: Where<Mp>): Promise<Count>;
    find(filter?: Filter<Mp>): Promise<Mp[]>;
    updateAll(mp: Mp, where?: Where<Mp>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Mp>): Promise<Mp>;
    updateById(id: string, mp: Mp): Promise<void>;
    replaceById(id: string, mp: Mp): Promise<void>;
    deleteById(id: string): Promise<void>;
}
