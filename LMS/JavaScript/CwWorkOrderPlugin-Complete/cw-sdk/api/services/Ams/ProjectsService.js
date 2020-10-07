define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var ProjectsService = /** @class */ (function () {
        function ProjectsService(service) {
            this._service = service;
        }
        ProjectsService.prototype.ByContractIds = function (request) {
            return this._service.call(request, 'Ams/Projects/ByContractIds');
        };
        ProjectsService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/Projects/ByIds');
        };
        ProjectsService.prototype.Create = function (request) {
            return this._service.call(request, 'Ams/Projects/Create');
        };
        ProjectsService.prototype.QuickView = function (request) {
            return this._service.call(request, 'Ams/Projects/QuickView');
        };
        ProjectsService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/Projects/Update');
        };
        return ProjectsService;
    }());
    exports.ProjectsService = ProjectsService;
});
