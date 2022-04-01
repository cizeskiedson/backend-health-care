"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteDataMonthController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PacienteDataMonthController = class PacienteDataMonthController {
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }
    async get(id, filter) {
        return this.pacienteRepository.dataMonth(id).get(filter);
    }
    async create(id, dataMonth) {
        return this.pacienteRepository.dataMonth(id).create(dataMonth);
    }
    async patch(id, dataMonth, where) {
        return this.pacienteRepository.dataMonth(id).patch(dataMonth, where);
    }
    async delete(id, where) {
        return this.pacienteRepository.dataMonth(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pacientes/{id}/data-month', {
        responses: {
            '200': {
                description: 'Paciente has one DataMonth',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.DataMonth),
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteDataMonthController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/pacientes/{id}/data-month', {
        responses: {
            '200': {
                description: 'Paciente model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.DataMonth) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataMonth, {
                    title: 'NewDataMonthInPaciente',
                    exclude: ['id'],
                    optional: ['emailPaciente']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteDataMonthController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pacientes/{id}/data-month', {
        responses: {
            '200': {
                description: 'Paciente.DataMonth PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataMonth, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.DataMonth))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteDataMonthController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/pacientes/{id}/data-month', {
        responses: {
            '200': {
                description: 'Paciente.DataMonth DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.DataMonth))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteDataMonthController.prototype, "delete", null);
PacienteDataMonthController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PacienteRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PacienteRepository])
], PacienteDataMonthController);
exports.PacienteDataMonthController = PacienteDataMonthController;
//# sourceMappingURL=paciente-data-month.controller.js.map