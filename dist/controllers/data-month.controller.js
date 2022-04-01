"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMonthController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DataMonthController = class DataMonthController {
    constructor(dataMonthRepository) {
        this.dataMonthRepository = dataMonthRepository;
    }
    async create(dataMonth) {
        return this.dataMonthRepository.create(dataMonth);
    }
    async count(where) {
        return this.dataMonthRepository.count(where);
    }
    async find(filter) {
        return this.dataMonthRepository.find(filter);
    }
    async updateAll(dataMonth, where) {
        return this.dataMonthRepository.updateAll(dataMonth, where);
    }
    async findById(id, filter) {
        return this.dataMonthRepository.findById(id, filter);
    }
    async updateById(id, dataMonth) {
        await this.dataMonthRepository.updateById(id, dataMonth);
    }
    async replaceById(id, dataMonth) {
        await this.dataMonthRepository.replaceById(id, dataMonth);
    }
    async deleteById(id) {
        await this.dataMonthRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/data-month'),
    (0, rest_1.response)(200, {
        description: 'DataMonth model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.DataMonth) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataMonth, {
                    title: 'NewDataMonth',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataMonthController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/data-month/count'),
    (0, rest_1.response)(200, {
        description: 'DataMonth model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.DataMonth)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataMonthController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/data-month'),
    (0, rest_1.response)(200, {
        description: 'Array of DataMonth model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.DataMonth, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.DataMonth)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataMonthController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/data-month'),
    (0, rest_1.response)(200, {
        description: 'DataMonth PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataMonth, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.DataMonth)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.DataMonth, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataMonthController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/data-month/{id}'),
    (0, rest_1.response)(200, {
        description: 'DataMonth model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataMonth, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.DataMonth, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataMonthController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/data-month/{id}'),
    (0, rest_1.response)(204, {
        description: 'DataMonth PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataMonth, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.DataMonth]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataMonthController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/data-month/{id}'),
    (0, rest_1.response)(204, {
        description: 'DataMonth PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.DataMonth]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataMonthController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/data-month/{id}'),
    (0, rest_1.response)(204, {
        description: 'DataMonth DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataMonthController.prototype, "deleteById", null);
DataMonthController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.DataMonthRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.DataMonthRepository])
], DataMonthController);
exports.DataMonthController = DataMonthController;
//# sourceMappingURL=data-month.controller.js.map