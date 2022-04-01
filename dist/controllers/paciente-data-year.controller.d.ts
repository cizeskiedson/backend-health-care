import { Count, Filter, Where } from '@loopback/repository';
import { Paciente, DataYear } from '../models';
import { PacienteRepository } from '../repositories';
export declare class PacienteDataYearController {
    protected pacienteRepository: PacienteRepository;
    constructor(pacienteRepository: PacienteRepository);
    get(id: string, filter?: Filter<DataYear>): Promise<DataYear>;
    create(id: typeof Paciente.prototype.email, dataYear: Omit<DataYear, 'id'>): Promise<DataYear>;
    patch(id: string, dataYear: Partial<DataYear>, where?: Where<DataYear>): Promise<Count>;
    delete(id: string, where?: Where<DataYear>): Promise<Count>;
}
