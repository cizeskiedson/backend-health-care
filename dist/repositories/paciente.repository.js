"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PacienteRepository = class PacienteRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, pcRepositoryGetter, confiancaRepositoryGetter, dataLastDayRepositoryGetter, dataMonthRepositoryGetter, dataYearRepositoryGetter) {
        super(models_1.Paciente, dataSource);
        this.pcRepositoryGetter = pcRepositoryGetter;
        this.confiancaRepositoryGetter = confiancaRepositoryGetter;
        this.dataLastDayRepositoryGetter = dataLastDayRepositoryGetter;
        this.dataMonthRepositoryGetter = dataMonthRepositoryGetter;
        this.dataYearRepositoryGetter = dataYearRepositoryGetter;
        this.dataYear = this.createHasOneRepositoryFactoryFor('dataYear', dataYearRepositoryGetter);
        this.dataMonth = this.createHasOneRepositoryFactoryFor('dataMonth', dataMonthRepositoryGetter);
        this.dataLastDay = this.createHasOneRepositoryFactoryFor('dataLastDay', dataLastDayRepositoryGetter);
        this.confiancas = this.createHasManyThroughRepositoryFactoryFor('confiancas', confiancaRepositoryGetter, pcRepositoryGetter);
    }
};
PacienteRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.db')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('PcRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('ConfiancaRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('DataLastDayRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('DataMonthRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('DataYearRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.DbDataSource, Function, Function, Function, Function, Function])
], PacienteRepository);
exports.PacienteRepository = PacienteRepository;
//# sourceMappingURL=paciente.repository.js.map