import { Count, Filter, Where } from '@loopback/repository';
import { Paciente, DataMonth } from '../models';
import { PacienteRepository } from '../repositories';
export declare class PacienteDataMonthController {
    protected pacienteRepository: PacienteRepository;
    constructor(pacienteRepository: PacienteRepository);
    get(id: string, filter?: Filter<DataMonth>): Promise<DataMonth>;
    create(id: typeof Paciente.prototype.email, dataMonth: Omit<DataMonth, 'id'>): Promise<DataMonth>;
    patch(id: string, dataMonth: Partial<DataMonth>, where?: Where<DataMonth>): Promise<Count>;
    delete(id: string, where?: Where<DataMonth>): Promise<Count>;
}
