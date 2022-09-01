define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CrewService = /** @class */ (function () {
        function CrewService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CrewService.prototype.ByEmployee = function (request) {
            return this._service.call(request, 'Ams/Crew/ByEmployee');
        };
        CrewService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/Crew/ByIds');
        };
        CrewService.prototype.Employees = function (request) {
            return this._service.call(request, 'Ams/Crew/Employees');
        };
        CrewService.prototype.Equipment = function (request) {
            return this._service.call(request, 'Ams/Crew/Equipment');
        };
        CrewService.prototype.Material = function (request) {
            return this._service.call(request, 'Ams/Crew/Material');
        };
        return CrewService;
    }());
    exports.CrewService = CrewService;
});
