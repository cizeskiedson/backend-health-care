import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Pc } from '../models';
import { PcRepository } from '../repositories';
export declare class PcController {
    pcRepository: PcRepository;
    constructor(pcRepository: PcRepository);
    create(pc: Pc): Promise<Pc>;
    count(where?: Where<Pc>): Promise<Count>;
    find(filter?: Filter<Pc>): Promise<Pc[]>;
    updateAll(pc: Pc, where?: Where<Pc>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Pc>): Promise<Pc>;
    updateById(id: string, pc: Pc): Promise<void>;
    replaceById(id: string, pc: Pc): Promise<void>;
    deleteById(id: string): Promise<void>;
}
