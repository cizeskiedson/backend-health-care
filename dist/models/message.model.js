"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mensagem = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Mensagem = class Mensagem extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Mensagem.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Mensagem.prototype, "subject", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Mensagem.prototype, "html", void 0);
Mensagem = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Mensagem);
exports.Mensagem = Mensagem;
//# sourceMappingURL=message.model.js.map