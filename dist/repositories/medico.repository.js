"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let MedicoRepository = class MedicoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, mpRepositoryGetter, pacienteRepositoryGetter) {
        super(models_1.Medico, dataSource);
        this.mpRepositoryGetter = mpRepositoryGetter;
        this.pacienteRepositoryGetter = pacienteRepositoryGetter;
        this.pacientes = this.createHasManyThroughRepositoryFactoryFor('pacientes', pacienteRepositoryGetter, mpRepositoryGetter);
    }
};
MedicoRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.db')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('MpRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('PacienteRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.DbDataSource, Function, Function])
], MedicoRepository);
exports.MedicoRepository = MedicoRepository;
//# sourceMappingURL=medico.repository.js.map