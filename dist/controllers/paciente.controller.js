"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PacienteController = class PacienteController {
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }
    async create(paciente) {
        return this.pacienteRepository.create(paciente);
    }
    async count(where) {
        return this.pacienteRepository.count(where);
    }
    async find(filter) {
        return this.pacienteRepository.find(filter);
    }
    async updateAll(paciente, where) {
        return this.pacienteRepository.updateAll(paciente, where);
    }
    async findById(id, filter) {
        return this.pacienteRepository.findById(id, filter);
    }
    async updateById(id, paciente) {
        await this.pacienteRepository.updateById(id, paciente);
    }
    async replaceById(id, paciente) {
        await this.pacienteRepository.replaceById(id, paciente);
    }
    async deleteById(id) {
        await this.pacienteRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/pacientes'),
    (0, rest_1.response)(200, {
        description: 'Paciente model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente, {
                    title: 'NewPaciente',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Paciente]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pacientes/count'),
    (0, rest_1.response)(200, {
        description: 'Paciente model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Paciente)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pacientes'),
    (0, rest_1.response)(200, {
        description: 'Array of Paciente model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Paciente, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Paciente)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pacientes'),
    (0, rest_1.response)(200, {
        description: 'Paciente PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Paciente)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Paciente, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pacientes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Paciente model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Paciente, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pacientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Paciente PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Paciente]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/pacientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Paciente PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Paciente]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/pacientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Paciente DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PacienteController.prototype, "deleteById", null);
PacienteController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PacienteRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PacienteRepository])
], PacienteController);
exports.PacienteController = PacienteController;
//# sourceMappingURL=paciente.controller.js.map