"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoPacienteController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MedicoPacienteController = class MedicoPacienteController {
    constructor(medicoRepository) {
        this.medicoRepository = medicoRepository;
    }
    async find(id, filter) {
        return this.medicoRepository.pacientes(id).find(filter);
    }
    async create(id, paciente) {
        return this.medicoRepository.pacientes(id).create(paciente);
    }
    async patch(id, paciente, where) {
        return this.medicoRepository.pacientes(id).patch(paciente, where);
    }
    async delete(id, where) {
        return this.medicoRepository.pacientes(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/medicos/{id}/pacientes', {
        responses: {
            '200': {
                description: 'Array of Medico has many Paciente through Mp',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Paciente) },
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
], MedicoPacienteController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/medicos/{id}/pacientes', {
        responses: {
            '200': {
                description: 'create a Paciente model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente, {
                    title: 'NewPacienteInMedico',
                    exclude: ['email'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MedicoPacienteController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/medicos/{id}/pacientes', {
        responses: {
            '200': {
                description: 'Medico.Paciente PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Paciente))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MedicoPacienteController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/medicos/{id}/pacientes', {
        responses: {
            '200': {
                description: 'Medico.Paciente DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Paciente))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MedicoPacienteController.prototype, "delete", null);
MedicoPacienteController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.MedicoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.MedicoRepository])
], MedicoPacienteController);
exports.MedicoPacienteController = MedicoPacienteController;
//# sourceMappingURL=medico-paciente.controller.js.map