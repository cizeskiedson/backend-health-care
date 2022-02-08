"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MpController = class MpController {
    constructor(mpRepository) {
        this.mpRepository = mpRepository;
    }
    async create(mp) {
        return this.mpRepository.create(mp);
    }
    async count(where) {
        return this.mpRepository.count(where);
    }
    async find(filter) {
        return this.mpRepository.find(filter);
    }
    async updateAll(mp, where) {
        return this.mpRepository.updateAll(mp, where);
    }
    async findById(id, filter) {
        return this.mpRepository.findById(id, filter);
    }
    async updateById(id, mp) {
        await this.mpRepository.updateById(id, mp);
    }
    async replaceById(id, mp) {
        await this.mpRepository.replaceById(id, mp);
    }
    async deleteById(id) {
        await this.mpRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/mps'),
    (0, rest_1.response)(200, {
        description: 'Mp model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Mp) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mp, {
                    title: 'NewMp',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Mp]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MpController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/mps/count'),
    (0, rest_1.response)(200, {
        description: 'Mp model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Mp)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MpController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/mps'),
    (0, rest_1.response)(200, {
        description: 'Array of Mp model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Mp, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Mp)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MpController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/mps'),
    (0, rest_1.response)(200, {
        description: 'Mp PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mp, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Mp)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Mp, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MpController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/mps/{id}'),
    (0, rest_1.response)(200, {
        description: 'Mp model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mp, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Mp, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MpController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/mps/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mp PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mp, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Mp]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MpController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/mps/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mp PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Mp]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MpController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/mps/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mp DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MpController.prototype, "deleteById", null);
MpController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.MpRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.MpRepository])
], MpController);
exports.MpController = MpController;
//# sourceMappingURL=mp.controller.js.map