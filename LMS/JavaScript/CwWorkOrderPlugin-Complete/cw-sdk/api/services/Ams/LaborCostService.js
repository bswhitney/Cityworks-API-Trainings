define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var LaborCostService = /** @class */ (function () {
        function LaborCostService(service) {
            this._service = service;
        }
        LaborCostService.prototype.AddRequestCosts = function (request) {
            return this._service.call(request, 'Ams/LaborCost/AddRequestCosts');
        };
        LaborCostService.prototype.AddWorkOrderCosts = function (request) {
            return this._service.call(request, 'Ams/LaborCost/AddWorkOrderCosts');
        };
        LaborCostService.prototype.CostCodes = function (request) {
            return this._service.call(request, 'Ams/LaborCost/CostCodes');
        };
        LaborCostService.prototype.DeleteRequestCosts = function (request) {
            return this._service.call(request, 'Ams/LaborCost/DeleteRequestCosts');
        };
        LaborCostService.prototype.DeleteWorkOrderCosts = function (request) {
            return this._service.call(request, 'Ams/LaborCost/DeleteWorkOrderCosts');
        };
        LaborCostService.prototype.JobCodes = function (request) {
            return this._service.call(request, 'Ams/LaborCost/JobCodes');
        };
        LaborCostService.prototype.RequestCostsByRequest = function (request) {
            return this._service.call(request, 'Ams/LaborCost/RequestCostsByRequest');
        };
        LaborCostService.prototype.WorkOrderCostsByWorkOrder = function (request) {
            return this._service.call(request, 'Ams/LaborCost/WorkOrderCostsByWorkOrder');
        };
        return LaborCostService;
    }());
    exports.LaborCostService = LaborCostService;
});
