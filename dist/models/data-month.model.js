"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMonth = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let DataMonth = class DataMonth extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DataMonth.prototype, "stepsCurrentMonth", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DataMonth.prototype, "fallCurrentMonth", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DataMonth.prototype, "stepsLastMonth", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DataMonth.prototype, "fallLastMonth", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DataMonth.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DataMonth.prototype, "emailPaciente", void 0);
DataMonth = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], DataMonth);
exports.DataMonth = DataMonth;
//# sourceMappingURL=data-month.model.js.map