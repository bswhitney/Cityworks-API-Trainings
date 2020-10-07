define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var SecurityService = /** @class */ (function () {
        function SecurityService(service) {
            this._service = service;
        }
        SecurityService.prototype.Contract = function (request) {
            return this._service.call(request, 'Ams/Security/Contract');
        };
        SecurityService.prototype.Contracts = function (request) {
            return this._service.call(request, 'Ams/Security/Contracts');
        };
        SecurityService.prototype.Inspection = function (request) {
            return this._service.call(request, 'Ams/Security/Inspection');
        };
        SecurityService.prototype.Inspections = function (request) {
            return this._service.call(request, 'Ams/Security/Inspections');
        };
        SecurityService.prototype.InspectionTemplate = function (request) {
            return this._service.call(request, 'Ams/Security/InspectionTemplate');
        };
        SecurityService.prototype.InspectionTemplates = function (request) {
            return this._service.call(request, 'Ams/Security/InspectionTemplates');
        };
        SecurityService.prototype.Problem = function (request) {
            return this._service.call(request, 'Ams/Security/Problem');
        };
        SecurityService.prototype.Problems = function (request) {
            return this._service.call(request, 'Ams/Security/Problems');
        };
        SecurityService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/Security/Search');
        };
        SecurityService.prototype.ServiceRequest = function (request) {
            return this._service.call(request, 'Ams/Security/ServiceRequest');
        };
        SecurityService.prototype.ServiceRequests = function (request) {
            return this._service.call(request, 'Ams/Security/ServiceRequests');
        };
        SecurityService.prototype.WorkOrder = function (request) {
            return this._service.call(request, 'Ams/Security/WorkOrder');
        };
        SecurityService.prototype.WorkOrderBySid = function (request) {
            return this._service.call(request, 'Ams/Security/WorkOrderBySid');
        };
        SecurityService.prototype.WorkOrders = function (request) {
            return this._service.call(request, 'Ams/Security/WorkOrders');
        };
        SecurityService.prototype.WorkOrderTemplate = function (request) {
            return this._service.call(request, 'Ams/Security/WorkOrderTemplate');
        };
        return SecurityService;
    }());
    exports.SecurityService = SecurityService;
});
