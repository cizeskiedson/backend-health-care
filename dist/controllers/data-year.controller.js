"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataYearController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DataYearController = class DataYearController {
    constructor(dataYearRepository) {
        this.dataYearRepository = dataYearRepository;
    }
    async create(dataYear) {
        return this.dataYearRepository.create(dataYear);
    }
    async count(where) {
        return this.dataYearRepository.count(where);
    }
    async find(filter) {
        return this.dataYearRepository.find(filter);
    }
    async updateAll(dataYear, where) {
        return this.dataYearRepository.updateAll(dataYear, where);
    }
    async findById(id, filter) {
        return this.dataYearRepository.findById(id, filter);
    }
    async updateById(id, dataYear) {
        await this.dataYearRepository.updateById(id, dataYear);
    }
    async replaceById(id, dataYear) {
        await this.dataYearRepository.replaceById(id, dataYear);
    }
    async deleteById(id) {
        await this.dataYearRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/data-year'),
    (0, rest_1.response)(200, {
        description: 'DataYear model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.DataYear) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataYear, {
                    title: 'NewDataYear',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataYearController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/data-year/count'),
    (0, rest_1.response)(200, {
        description: 'DataYear model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.DataYear)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataYearController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/data-year'),
    (0, rest_1.response)(200, {
        description: 'Array of DataYear model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.DataYear, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.DataYear)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataYearController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/data-year'),
    (0, rest_1.response)(200, {
        description: 'DataYear PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataYear, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.DataYear)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.DataYear, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataYearController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/data-year/{id}'),
    (0, rest_1.response)(200, {
        description: 'DataYear model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataYear, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.DataYear, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataYearController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/data-year/{id}'),
    (0, rest_1.response)(204, {
        description: 'DataYear PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataYear, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.DataYear]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataYearController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/data-year/{id}'),
    (0, rest_1.response)(204, {
        description: 'DataYear PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.DataYear]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataYearController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/data-year/{id}'),
    (0, rest_1.response)(204, {
        description: 'DataYear DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataYearController.prototype, "deleteById", null);
DataYearController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.DataYearRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.DataYearRepository])
], DataYearController);
exports.DataYearController = DataYearController;
//# sourceMappingURL=data-year.controller.js.map