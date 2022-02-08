import { Count, Filter, Where } from '@loopback/repository';
import { Medico, Paciente } from '../models';
import { MedicoRepository } from '../repositories';
export declare class MedicoPacienteController {
    protected medicoRepository: MedicoRepository;
    constructor(medicoRepository: MedicoRepository);
    find(id: string, filter?: Filter<Paciente>): Promise<Paciente[]>;
    create(id: typeof Medico.prototype.email, paciente: Omit<Paciente, 'email'>): Promise<Paciente>;
    patch(id: string, paciente: Partial<Paciente>, where?: Where<Paciente>): Promise<Count>;
    delete(id: string, where?: Where<Paciente>): Promise<Count>;
}
