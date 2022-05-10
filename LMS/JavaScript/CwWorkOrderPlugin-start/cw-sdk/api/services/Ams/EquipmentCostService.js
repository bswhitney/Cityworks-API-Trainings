define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var EquipmentCostService = /** @class */ (function () {
        function EquipmentCostService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        EquipmentCostService.prototype.AddInspectionCosts = function (request) {
            return this._service.call(request, 'Ams/EquipmentCost/AddInspectionCosts');
        };
        EquipmentCostService.prototype.AddWorkOrderCosts = function (request) {
            return this._service.call(request, 'Ams/EquipmentCost/AddWorkOrderCosts');
        };
        EquipmentCostService.prototype.DeleteInspectionCosts = function (request) {
            return this._service.call(request, 'Ams/EquipmentCost/DeleteInspectionCosts');
        };
        EquipmentCostService.prototype.DeleteWorkOrderCosts = function (request) {
            return this._service.call(request, 'Ams/EquipmentCost/DeleteWorkOrderCosts');
        };
        EquipmentCostService.prototype.InspectionCostsByInspection = function (request) {
            return this._service.call(request, 'Ams/EquipmentCost/InspectionCostsByInspection');
        };
        EquipmentCostService.prototype.WorkOrderCostsByWorkOrder = function (request) {
            return this._service.call(request, 'Ams/EquipmentCost/WorkOrderCostsByWorkOrder');
        };
        return EquipmentCostService;
    }());
    exports.EquipmentCostService = EquipmentCostService;
});
