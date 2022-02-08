"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medico = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const paciente_model_1 = require("./paciente.model");
const mp_model_1 = require("./mp.model");
let Medico = class Medico extends repository_1.Entity {
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
], Medico.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Medico.prototype, "cpf", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Medico.prototype, "crm", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Medico.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Medico.prototype, "phone", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Medico.prototype, "area", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => paciente_model_1.Paciente, { through: { model: () => mp_model_1.Mp, keyFrom: 'emailMedico', keyTo: 'emailPaciente' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Medico.prototype, "pacientes", void 0);
Medico = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Medico);
exports.Medico = Medico;
//# sourceMappingURL=medico.model.js.map