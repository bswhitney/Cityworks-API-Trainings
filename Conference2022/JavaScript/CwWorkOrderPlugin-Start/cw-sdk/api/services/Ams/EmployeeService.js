define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var EmployeeService = /** @class */ (function () {
        function EmployeeService(service) {
            this.ErrorCodes = {
                UnknownError: 1,
                NotAuthorizedToCreateEmployee: 5,
                NotAuthorizedToUpdateDomain: 6,
                UniqueNameIsNotUnique: 8,
                InvalidField: 30,
                ErrorCreatingEmployee: 31,
                ErrorUpdatingEmployee: 32
            };
            this.WarningCodes = {
                WarningItemNotFound: 60,
                WarningEmptyOrNullField: 61
            };
            this._service = service;
        }
        EmployeeService.prototype.Add = function (request) {
            return this._service.call(request, 'Ams/Employee/Add');
        };
        EmployeeService.prototype.AddLicensedItems = function (request) {
            return this._service.call(request, 'Ams/Employee/AddLicensedItems');
        };
        EmployeeService.prototype.All = function (request) {
            return this._service.call(request, 'Ams/Employee/All');
        };
        EmployeeService.prototype.ByGroupId = function (request) {
            return this._service.call(request, 'Ams/Employee/ByGroupId');
        };
        EmployeeService.prototype.ById = function (request) {
            return this._service.call(request, 'Ams/Employee/ById');
        };
        EmployeeService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/Employee/ByIds');
        };
        EmployeeService.prototype.CustomDataFields = function (request) {
            return this._service.call(request, 'Ams/Employee/CustomDataFields');
        };
        EmployeeService.prototype.Delete = function (request) {
            return this._service.call(request, 'Ams/Employee/Delete');
        };
        EmployeeService.prototype.DeleteLicensedItems = function (request) {
            return this._service.call(request, 'Ams/Employee/DeleteLicensedItems');
        };
        EmployeeService.prototype.Groups = function (request) {
            return this._service.call(request, 'Ams/Employee/Groups');
        };
        EmployeeService.prototype.NamesAreUnique = function (request) {
            return this._service.call(request, 'Ams/Employee/NamesAreUnique');
        };
        EmployeeService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/Employee/Search');
        };
        EmployeeService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/Employee/Update');
        };
        return EmployeeService;
    }());
    exports.EmployeeService = EmployeeService;
});
