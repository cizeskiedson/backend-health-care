"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const confianca_model_1 = require("./confianca.model");
const pc_model_1 = require("./pc.model");
const data_last_day_model_1 = require("./data-last-day.model");
const data_month_model_1 = require("./data-month.model");
const data_year_model_1 = require("./data-year.model");
let Paciente = class Paciente extends repository_1.Entity {
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
], Paciente.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Paciente.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Paciente.prototype, "cpf", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Paciente.prototype, "age", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Paciente.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Paciente.prototype, "phone", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Paciente.prototype, "bloodType", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Paciente.prototype, "healthProblems", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Paciente.prototype, "weight", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Paciente.prototype, "height", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Paciente.prototype, "observations", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Paciente.prototype, "allergies", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => confianca_model_1.Confianca, {
        through: {
            model: () => pc_model_1.Pc,
            keyFrom: 'emailPaciente',
            keyTo: 'emailConfianca',
        },
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Paciente.prototype, "confiancas", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => data_last_day_model_1.DataLastDay, { keyTo: 'emailPaciente' }),
    (0, tslib_1.__metadata)("design:type", data_last_day_model_1.DataLastDay)
], Paciente.prototype, "dataLastDay", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => data_month_model_1.DataMonth, { keyTo: 'emailPaciente' }),
    (0, tslib_1.__metadata)("design:type", data_month_model_1.DataMonth)
], Paciente.prototype, "dataMonth", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => data_year_model_1.DataYear, { keyTo: 'emailPaciente' }),
    (0, tslib_1.__metadata)("design:type", data_year_model_1.DataYear)
], Paciente.prototype, "dataYear", void 0);
Paciente = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Paciente);
exports.Paciente = Paciente;
//# sourceMappingURL=paciente.model.js.map