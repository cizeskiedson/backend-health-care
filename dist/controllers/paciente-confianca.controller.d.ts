import { Count, Filter, Where } from '@loopback/repository';
import { Confianca, Paciente } from '../models';
import { PacienteRepository } from '../repositories';
export declare class PacienteConfiancaController {
    protected pacienteRepository: PacienteRepository;
    constructor(pacienteRepository: PacienteRepository);
    find(id: string, filter?: Filter<Confianca>): Promise<Confianca[]>;
    create(id: typeof Paciente.prototype.email, confianca: Omit<Confianca, 'email'>): Promise<Confianca>;
    patch(id: string, confianca: Partial<Confianca>, where?: Where<Confianca>): Promise<Count>;
    delete(id: string, where?: Where<Confianca>): Promise<Count>;
}
