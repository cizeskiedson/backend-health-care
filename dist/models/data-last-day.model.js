"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLastDay = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let DataLastDay = class DataLastDay extends repository_1.Entity {
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
], DataLastDay.prototype, "steps", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DataLastDay.prototype, "fall", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DataLastDay.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DataLastDay.prototype, "emailPaciente", void 0);
DataLastDay = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], DataLastDay);
exports.DataLastDay = DataLastDay;
//# sourceMappingURL=data-last-day.model.js.map