import { Entity } from '@loopback/repository';
export declare class Mensagem extends Entity {
    email: string;
    subject: string;
    html: string;
    constructor(data?: Partial<Mensagem>);
}
