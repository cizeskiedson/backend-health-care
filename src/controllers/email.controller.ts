import {getModelSchemaRef, post, requestBody} from '@loopback/rest';
import {sendEmail} from '../email';
import {Mensagem} from '../models/message.model';

export class EmailController {
  // returns a list of our objects
  @post('/message')
  async sendEmail(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mensagem, {
            title: 'NewEmail',
          }),
        },
      },
    })
    mensagem: Mensagem,
  ): Promise<boolean> {
    const response = sendEmail(mensagem);
    return response; // a CRUD method from our repository
  }
}
