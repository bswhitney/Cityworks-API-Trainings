define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var MaterialCostService = /** @class */ (function () {
        function MaterialCostService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        MaterialCostService.prototype.AddWorkOrderCosts = function (request) {
            return this._service.call(request, 'Ams/MaterialCost/AddWorkOrderCosts');
        };
        MaterialCostService.prototype.DeleteWorkOrderCosts = function (request) {
            return this._service.call(request, 'Ams/MaterialCost/DeleteWorkOrderCosts');
        };
        MaterialCostService.prototype.WorkOrderCostsByWorkOrder = function (request) {
            return this._service.call(request, 'Ams/MaterialCost/WorkOrderCostsByWorkOrder');
        };
        return MaterialCostService;
    }());
    exports.MaterialCostService = MaterialCostService;
});
