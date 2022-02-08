import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Paciente } from '../models';
import { PacienteRepository } from '../repositories';
export declare class PacienteController {
    pacienteRepository: PacienteRepository;
    constructor(pacienteRepository: PacienteRepository);
    create(paciente: Paciente): Promise<Paciente>;
    count(where?: Where<Paciente>): Promise<Count>;
    find(filter?: Filter<Paciente>): Promise<Paciente[]>;
    updateAll(paciente: Paciente, where?: Where<Paciente>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Paciente>): Promise<Paciente>;
    updateById(id: string, paciente: Paciente): Promise<void>;
    replaceById(id: string, paciente: Paciente): Promise<void>;
    deleteById(id: string): Promise<void>;
}
