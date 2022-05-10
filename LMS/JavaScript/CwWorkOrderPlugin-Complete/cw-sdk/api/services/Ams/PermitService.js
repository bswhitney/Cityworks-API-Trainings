define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var PermitService = /** @class */ (function () {
        function PermitService(service) {
            this.ErrorCodes = {
                UnknownError: 1,
                WorkOrderIdRequired: 2,
                PermitSidsRequired: 3,
                PermitDoesNotExist: 4,
                PermitNumberRequired: 5,
                PermitSidRequired: 6,
                WorkOrderSidRequired: 7,
                MustBeDomainAdmin: 8
            };
            this.WarningCodes = {};
            this._service = service;
        }
        PermitService.prototype.AddWorkOrderPermits = function (request) {
            return this._service.call(request, 'Ams/Permit/AddWorkOrderPermits');
        };
        PermitService.prototype.CreatePermit = function (request) {
            return this._service.call(request, 'Ams/Permit/CreatePermit');
        };
        PermitService.prototype.DeletePermits = function (request) {
            return this._service.call(request, 'Ams/Permit/DeletePermits');
        };
        PermitService.prototype.DeleteWorkOrderPermits = function (request) {
            return this._service.call(request, 'Ams/Permit/DeleteWorkOrderPermits');
        };
        PermitService.prototype.Permits = function (request) {
            return this._service.call(request, 'Ams/Permit/Permits');
        };
        PermitService.prototype.PermitTypes = function (request) {
            return this._service.call(request, 'Ams/Permit/PermitTypes');
        };
        PermitService.prototype.UpdatePermit = function (request) {
            return this._service.call(request, 'Ams/Permit/UpdatePermit');
        };
        PermitService.prototype.WorkOrderPermits = function (request) {
            return this._service.call(request, 'Ams/Permit/WorkOrderPermits');
        };
        return PermitService;
    }());
    exports.PermitService = PermitService;
});
