import { Count, Filter, Where } from '@loopback/repository';
import { Paciente, DataLastDay } from '../models';
import { PacienteRepository } from '../repositories';
export declare class PacienteDataLastDayController {
    protected pacienteRepository: PacienteRepository;
    constructor(pacienteRepository: PacienteRepository);
    get(id: string, filter?: Filter<DataLastDay>): Promise<DataLastDay>;
    create(id: typeof Paciente.prototype.email, dataLastDay: Omit<DataLastDay, 'id'>): Promise<DataLastDay>;
    patch(id: string, dataLastDay: Partial<DataLastDay>, where?: Where<DataLastDay>): Promise<Count>;
    delete(id: string, where?: Where<DataLastDay>): Promise<Count>;
}
