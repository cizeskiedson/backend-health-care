"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteDataYearController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PacienteDataYearController = class PacienteDataYearController {
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }
    async get(id, filter) {
        return this.pacienteRepository.dataYear(id).get(filter);
    }
    async create(id, dataYear) {
        return this.pacienteRepository.dataYear(id).create(dataYear);
    }
    async patch(id, dataYear, where) {
        return this.pacienteRepository.dataYear(id).patch(dataYear, where);
    }
    async delete(id, where) {
        return this.pacienteRepository.dataYear(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pacientes/{id}/data-year', {
        responses: {
            '200': {
                description: 'Paciente has one DataYear',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.DataYear),
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
], PacienteDataYearController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/pacientes/{id}/data-year', {
        responses: {
            '200': {
                description: 'Paciente model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.DataYear) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataYear, {
                    title: 'NewDataYearInPaciente',
                    exclude: ['id'],
                    optional: ['emailPaciente']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteDataYearController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pacientes/{id}/data-year', {
        responses: {
            '200': {
                description: 'Paciente.DataYear PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataYear, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.DataYear))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteDataYearController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/pacientes/{id}/data-year', {
        responses: {
            '200': {
                description: 'Paciente.DataYear DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.DataYear))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteDataYearController.prototype, "delete", null);
PacienteDataYearController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PacienteRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PacienteRepository])
], PacienteDataYearController);
exports.PacienteDataYearController = PacienteDataYearController;
//# sourceMappingURL=paciente-data-year.controller.js.map