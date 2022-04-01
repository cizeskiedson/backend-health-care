"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLastDayController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DataLastDayController = class DataLastDayController {
    constructor(dataLastDayRepository) {
        this.dataLastDayRepository = dataLastDayRepository;
    }
    async create(dataLastDay) {
        return this.dataLastDayRepository.create(dataLastDay);
    }
    async count(where) {
        return this.dataLastDayRepository.count(where);
    }
    async find(filter) {
        return this.dataLastDayRepository.find(filter);
    }
    async updateAll(dataLastDay, where) {
        return this.dataLastDayRepository.updateAll(dataLastDay, where);
    }
    async findById(id, filter) {
        return this.dataLastDayRepository.findById(id, filter);
    }
    async updateById(id, dataLastDay) {
        await this.dataLastDayRepository.updateById(id, dataLastDay);
    }
    async replaceById(id, dataLastDay) {
        await this.dataLastDayRepository.replaceById(id, dataLastDay);
    }
    async deleteById(id) {
        await this.dataLastDayRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/data-last-day'),
    (0, rest_1.response)(200, {
        description: 'DataLastDay model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.DataLastDay) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataLastDay, {
                    title: 'NewDataLastDay',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataLastDayController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/data-last-day/count'),
    (0, rest_1.response)(200, {
        description: 'DataLastDay model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.DataLastDay)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataLastDayController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/data-last-day'),
    (0, rest_1.response)(200, {
        description: 'Array of DataLastDay model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.DataLastDay, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.DataLastDay)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataLastDayController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/data-last-day'),
    (0, rest_1.response)(200, {
        description: 'DataLastDay PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataLastDay, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.DataLastDay)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.DataLastDay, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataLastDayController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/data-last-day/{id}'),
    (0, rest_1.response)(200, {
        description: 'DataLastDay model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataLastDay, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.DataLastDay, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataLastDayController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/data-last-day/{id}'),
    (0, rest_1.response)(204, {
        description: 'DataLastDay PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DataLastDay, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.DataLastDay]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataLastDayController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/data-last-day/{id}'),
    (0, rest_1.response)(204, {
        description: 'DataLastDay PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.DataLastDay]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataLastDayController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/data-last-day/{id}'),
    (0, rest_1.response)(204, {
        description: 'DataLastDay DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DataLastDayController.prototype, "deleteById", null);
DataLastDayController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.DataLastDayRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.DataLastDayRepository])
], DataLastDayController);
exports.DataLastDayController = DataLastDayController;
//# sourceMappingURL=data-last-day.controller.js.map