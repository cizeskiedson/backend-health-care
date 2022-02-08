"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mp = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Mp = class Mp extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Mp.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Mp.prototype, "emailMedico", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Mp.prototype, "emailPaciente", void 0);
Mp = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Mp);
exports.Mp = Mp;
//# sourceMappingURL=mp.model.js.map