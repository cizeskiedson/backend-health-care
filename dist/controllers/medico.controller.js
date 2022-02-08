"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MedicoController = class MedicoController {
    constructor(medicoRepository) {
        this.medicoRepository = medicoRepository;
    }
    async create(medico) {
        return this.medicoRepository.create(medico);
    }
    async count(where) {
        return this.medicoRepository.count(where);
    }
    async find(filter) {
        return this.medicoRepository.find(filter);
    }
    async updateAll(medico, where) {
        return this.medicoRepository.updateAll(medico, where);
    }
    async findById(id, filter) {
        return this.medicoRepository.findById(id, filter);
    }
    async updateById(id, medico) {
        await this.medicoRepository.updateById(id, medico);
    }
    async replaceById(id, medico) {
        await this.medicoRepository.replaceById(id, medico);
    }
    async deleteById(id) {
        await this.medicoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/medicos'),
    (0, rest_1.response)(200, {
        description: 'Medico model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Medico) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medico, {
                    title: 'NewMedico',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Medico]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MedicoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/medicos/count'),
    (0, rest_1.response)(200, {
        description: 'Medico model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Medico)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MedicoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/medicos'),
    (0, rest_1.response)(200, {
        description: 'Array of Medico model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Medico, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Medico)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MedicoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/medicos'),
    (0, rest_1.response)(200, {
        description: 'Medico PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medico, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Medico)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Medico, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MedicoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/medicos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Medico model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medico, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Medico, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MedicoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/medicos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Medico PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medico, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Medico]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MedicoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/medicos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Medico PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Medico]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MedicoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/medicos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Medico DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MedicoController.prototype, "deleteById", null);
MedicoController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.MedicoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.MedicoRepository])
], MedicoController);
exports.MedicoController = MedicoController;
//# sourceMappingURL=medico.controller.js.map