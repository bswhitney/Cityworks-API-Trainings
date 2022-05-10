define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var UniversalCustomFieldService = /** @class */ (function () {
        function UniversalCustomFieldService(service) {
            this.ErrorCodes = {
                InvalidField: 30,
                UnauthorizedUser: 40,
                AddError: 50,
                UpdateError: 51
            };
            this.WarningCodes = {
                WarningEmptyOrNullField: 61
            };
            this._service = service;
        }
        UniversalCustomFieldService.prototype.Add = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/Add');
        };
        UniversalCustomFieldService.prototype.ById = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/ById');
        };
        UniversalCustomFieldService.prototype.ByType = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/ByType');
        };
        UniversalCustomFieldService.prototype.Contract = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/Contract');
        };
        UniversalCustomFieldService.prototype.CustomerCall = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/CustomerCall');
        };
        UniversalCustomFieldService.prototype.Delete = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/Delete');
        };
        UniversalCustomFieldService.prototype.Inspection = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/Inspection');
        };
        UniversalCustomFieldService.prototype.MoveField = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/MoveField');
        };
        UniversalCustomFieldService.prototype.Project = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/Project');
        };
        UniversalCustomFieldService.prototype.ServiceRequest = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/ServiceRequest');
        };
        UniversalCustomFieldService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/Update');
        };
        UniversalCustomFieldService.prototype.WorkOrder = function (request) {
            return this._service.call(request, 'Ams/UniversalCustomField/WorkOrder');
        };
        return UniversalCustomFieldService;
    }());
    exports.UniversalCustomFieldService = UniversalCustomFieldService;
});
