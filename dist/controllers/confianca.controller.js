"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiancaController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ConfiancaController = class ConfiancaController {
    constructor(confiancaRepository) {
        this.confiancaRepository = confiancaRepository;
    }
    async create(confianca) {
        return this.confiancaRepository.create(confianca);
    }
    async count(where) {
        return this.confiancaRepository.count(where);
    }
    async find(filter) {
        return this.confiancaRepository.find(filter);
    }
    async updateAll(confianca, where) {
        return this.confiancaRepository.updateAll(confianca, where);
    }
    async findById(id, filter) {
        return this.confiancaRepository.findById(id, filter);
    }
    async updateById(id, confianca) {
        await this.confiancaRepository.updateById(id, confianca);
    }
    async replaceById(id, confianca) {
        await this.confiancaRepository.replaceById(id, confianca);
    }
    async deleteById(id) {
        await this.confiancaRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/confiancas'),
    (0, rest_1.response)(200, {
        description: 'Confianca model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Confianca) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Confianca, {
                    title: 'NewConfianca',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Confianca]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ConfiancaController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/confiancas/count'),
    (0, rest_1.response)(200, {
        description: 'Confianca model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Confianca)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ConfiancaController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/confiancas'),
    (0, rest_1.response)(200, {
        description: 'Array of Confianca model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Confianca, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Confianca)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ConfiancaController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/confiancas'),
    (0, rest_1.response)(200, {
        description: 'Confianca PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Confianca, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Confianca)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Confianca, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ConfiancaController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/confiancas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Confianca model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Confianca, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Confianca, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ConfiancaController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/confiancas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Confianca PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Confianca, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Confianca]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ConfiancaController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/confiancas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Confianca PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Confianca]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ConfiancaController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/confiancas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Confianca DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ConfiancaController.prototype, "deleteById", null);
ConfiancaController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ConfiancaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ConfiancaRepository])
], ConfiancaController);
exports.ConfiancaController = ConfiancaController;
//# sourceMappingURL=confianca.controller.js.map