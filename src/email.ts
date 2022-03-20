import {Mensagem} from './models/message.model';

export const sendEmail = async (mensagem: Mensagem): Promise<boolean> => {
  /*  require('dotenv').config(); */
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: mensagem.email, // Change to your recipient
    from: 'ra107514@uem.br', // Change to your verified sender
    subject: mensagem.subject,
    html: mensagem.html,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error: unknown) => {
      console.error(error);
      return false;
    });
  return true;
};
