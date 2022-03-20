"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const email_1 = require("../email");
const message_model_1 = require("../models/message.model");
class EmailController {
    // returns a list of our objects
    async sendEmail(mensagem) {
        const response = (0, email_1.sendEmail)(mensagem);
        return response; // a CRUD method from our repository
    }
}
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/message/{email}'),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(message_model_1.Mensagem, {
                    title: 'NewEmail',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [message_model_1.Mensagem]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmailController.prototype, "sendEmail", null);
exports.EmailController = EmailController;
//# sourceMappingURL=email.controller.js.map