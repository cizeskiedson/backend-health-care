"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const sendEmail = async (mensagem) => {
    /* require('dotenv-safe').config(); */
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: mensagem.email,
        from: 'ra107514@uem.br',
        subject: mensagem.subject,
        html: mensagem.html,
    };
    sgMail
        .send(msg)
        .then(() => {
        console.log('Email sent');
    })
        .catch((error) => {
        console.error(error);
        return false;
    });
    return true;
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.js.map