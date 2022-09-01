define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var ProjectsService = /** @class */ (function () {
        function ProjectsService(service) {
            this.ErrorCodes = {
                UnknownError: 1,
                NotAuthorizedToCreateProject: 2,
                NotAuthorizedToUpdateProject: 3,
                InvalidField: 30,
                ErrorItemNotFound: 35
            };
            this.WarningCodes = {
                WarningItemNotFound: 60,
                WarningNoPermissionToViewProject: 90
            };
            this._service = service;
        }
        ProjectsService.prototype.AddEntities = function (request) {
            return this._service.call(request, 'Ams/Projects/AddEntities');
        };
        ProjectsService.prototype.AddToContractId = function (request) {
            return this._service.call(request, 'Ams/Projects/AddToContractId');
        };
        ProjectsService.prototype.All = function (request) {
            return this._service.call(request, 'Ams/Projects/All');
        };
        ProjectsService.prototype.AuditLog = function (request) {
            return this._service.call(request, 'Ams/Projects/AuditLog');
        };
        ProjectsService.prototype.ByContractIds = function (request) {
            return this._service.call(request, 'Ams/Projects/ByContractIds');
        };
        ProjectsService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/Projects/ByIds');
        };
        ProjectsService.prototype.Categories = function (request) {
            return this._service.call(request, 'Ams/Projects/Categories');
        };
        ProjectsService.prototype.Create = function (request) {
            return this._service.call(request, 'Ams/Projects/Create');
        };
        ProjectsService.prototype.CreateSearchDefinition = function (request) {
            return this._service.call(request, 'Ams/Projects/CreateSearchDefinition');
        };
        ProjectsService.prototype.DeleteFromContractId = function (request) {
            return this._service.call(request, 'Ams/Projects/DeleteFromContractId');
        };
        ProjectsService.prototype.Entities = function (request) {
            return this._service.call(request, 'Ams/Projects/Entities');
        };
        ProjectsService.prototype.Move = function (request) {
            return this._service.call(request, 'Ams/Projects/Move');
        };
        ProjectsService.prototype.QuickView = function (request) {
            return this._service.call(request, 'Ams/Projects/QuickView');
        };
        ProjectsService.prototype.RemoveEntities = function (request) {
            return this._service.call(request, 'Ams/Projects/RemoveEntities');
        };
        ProjectsService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/Projects/Search');
        };
        ProjectsService.prototype.Statuses = function (request) {
            return this._service.call(request, 'Ams/Projects/Statuses');
        };
        ProjectsService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/Projects/Update');
        };
        ProjectsService.prototype.UseOpxPermissions = function (request) {
            return this._service.call(request, 'Ams/Projects/UseOpxPermissions');
        };
        return ProjectsService;
    }());
    exports.ProjectsService = ProjectsService;
});
