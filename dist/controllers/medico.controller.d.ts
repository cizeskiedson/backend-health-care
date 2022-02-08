import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Medico } from '../models';
import { MedicoRepository } from '../repositories';
export declare class MedicoController {
    medicoRepository: MedicoRepository;
    constructor(medicoRepository: MedicoRepository);
    create(medico: Medico): Promise<Medico>;
    count(where?: Where<Medico>): Promise<Count>;
    find(filter?: Filter<Medico>): Promise<Medico[]>;
    updateAll(medico: Medico, where?: Where<Medico>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Medico>): Promise<Medico>;
    updateById(id: string, medico: Medico): Promise<void>;
    replaceById(id: string, medico: Medico): Promise<void>;
    deleteById(id: string): Promise<void>;
}
