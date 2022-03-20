import { Mensagem } from '../models/message.model';
export declare class EmailController {
    sendEmail(mensagem: Mensagem): Promise<boolean>;
}
