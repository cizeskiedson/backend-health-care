"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PcController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PcController = class PcController {
    constructor(pcRepository) {
        this.pcRepository = pcRepository;
    }
    async create(pc) {
        return this.pcRepository.create(pc);
    }
    async count(where) {
        return this.pcRepository.count(where);
    }
    async find(filter) {
        return this.pcRepository.find(filter);
    }
    async updateAll(pc, where) {
        return this.pcRepository.updateAll(pc, where);
    }
    async findById(id, filter) {
        return this.pcRepository.findById(id, filter);
    }
    async updateById(id, pc) {
        await this.pcRepository.updateById(id, pc);
    }
    async replaceById(id, pc) {
        await this.pcRepository.replaceById(id, pc);
    }
    async deleteById(id) {
        await this.pcRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/pcs'),
    (0, rest_1.response)(200, {
        description: 'Pc model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pc) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pc, {
                    title: 'NewPc',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Pc]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PcController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pcs/count'),
    (0, rest_1.response)(200, {
        description: 'Pc model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Pc)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PcController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pcs'),
    (0, rest_1.response)(200, {
        description: 'Array of Pc model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Pc, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Pc)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PcController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pcs'),
    (0, rest_1.response)(200, {
        description: 'Pc PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pc, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Pc)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Pc, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PcController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pcs/{id}'),
    (0, rest_1.response)(200, {
        description: 'Pc model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pc, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Pc, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PcController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pcs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pc PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pc, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Pc]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PcController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/pcs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pc PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Pc]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PcController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/pcs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pc DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PcController.prototype, "deleteById", null);
PcController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PcRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PcRepository])
], PcController);
exports.PcController = PcController;
//# sourceMappingURL=pc.controller.js.map