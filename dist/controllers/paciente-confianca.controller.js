"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteConfiancaController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PacienteConfiancaController = class PacienteConfiancaController {
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }
    async find(id, filter) {
        return this.pacienteRepository.confiancas(id).find(filter);
    }
    async create(id, confianca) {
        return this.pacienteRepository.confiancas(id).create(confianca);
    }
    async patch(id, confianca, where) {
        return this.pacienteRepository.confiancas(id).patch(confianca, where);
    }
    async delete(id, where) {
        return this.pacienteRepository.confiancas(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pacientes/{id}/confiancas', {
        responses: {
            '200': {
                description: 'Array of Paciente has many Confianca through Pc',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Confianca) },
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
], PacienteConfiancaController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/pacientes/{id}/confiancas', {
        responses: {
            '200': {
                description: 'create a Confianca model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Confianca) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Confianca, {
                    title: 'NewConfiancaInPaciente',
                    exclude: ['email'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteConfiancaController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pacientes/{id}/confiancas', {
        responses: {
            '200': {
                description: 'Paciente.Confianca PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Confianca, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Confianca))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteConfiancaController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/pacientes/{id}/confiancas', {
        responses: {
            '200': {
                description: 'Paciente.Confianca DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Confianca))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteConfiancaController.prototype, "delete", null);
PacienteConfiancaController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PacienteRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PacienteRepository])
], PacienteConfiancaController);
exports.PacienteConfiancaController = PacienteConfiancaController;
//# sourceMappingURL=paciente-confianca.controller.js.map