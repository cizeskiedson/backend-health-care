import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Confianca } from '../models';
import { ConfiancaRepository } from '../repositories';
export declare class ConfiancaController {
    confiancaRepository: ConfiancaRepository;
    constructor(confiancaRepository: ConfiancaRepository);
    create(confianca: Confianca): Promise<Confianca>;
    count(where?: Where<Confianca>): Promise<Count>;
    find(filter?: Filter<Confianca>): Promise<Confianca[]>;
    updateAll(confianca: Confianca, where?: Where<Confianca>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Confianca>): Promise<Confianca>;
    updateById(id: string, confianca: Confianca): Promise<void>;
    replaceById(id: string, confianca: Confianca): Promise<void>;
    deleteById(id: string): Promise<void>;
}
