define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var TemplateMapLayerService = /** @class */ (function () {
        function TemplateMapLayerService(service) {
            this.ErrorCodes = {
                UnknownError: 3,
                XYDataIsNotValid: 9,
                NotAuthorizedToUpdateServiceRequest: 10,
                NotAuthorizedToUpdateWorkOrder: 11,
                NotAuthorizedToUpdateInspection: 12
            };
            this.WarningCodes = {};
            this._service = service;
        }
        TemplateMapLayerService.prototype.DeleteInspectionInstancesByInspectionId = function (request) {
            return this._service.call(request, 'Ams/TemplateMapLayer/DeleteInspectionInstancesByInspectionId');
        };
        TemplateMapLayerService.prototype.DeleteServiceRequestInstancesByRequestId = function (request) {
            return this._service.call(request, 'Ams/TemplateMapLayer/DeleteServiceRequestInstancesByRequestId');
        };
        TemplateMapLayerService.prototype.DeleteWorkOrderInstancesByWorkOrdertId = function (request) {
            return this._service.call(request, 'Ams/TemplateMapLayer/DeleteWorkOrderInstancesByWorkOrdertId');
        };
        TemplateMapLayerService.prototype.InspectionInstanceMapLayersByInspectionId = function (request) {
            return this._service.call(request, 'Ams/TemplateMapLayer/InspectionInstanceMapLayersByInspectionId');
        };
        TemplateMapLayerService.prototype.ServiceRequestInstanceMapLayersByRequestId = function (request) {
            return this._service.call(request, 'Ams/TemplateMapLayer/ServiceRequestInstanceMapLayersByRequestId');
        };
        TemplateMapLayerService.prototype.UpdateInspectionInstanceMapLayers = function (request) {
            return this._service.call(request, 'Ams/TemplateMapLayer/UpdateInspectionInstanceMapLayers');
        };
        TemplateMapLayerService.prototype.UpdateServiceRequestInstanceMapLayers = function (request) {
            return this._service.call(request, 'Ams/TemplateMapLayer/UpdateServiceRequestInstanceMapLayers');
        };
        TemplateMapLayerService.prototype.UpdateWorkOrderInstanceMapLayers = function (request) {
            return this._service.call(request, 'Ams/TemplateMapLayer/UpdateWorkOrderInstanceMapLayers');
        };
        TemplateMapLayerService.prototype.WorkOrderInstanceMapLayersByWorkOrderId = function (request) {
            return this._service.call(request, 'Ams/TemplateMapLayer/WorkOrderInstanceMapLayersByWorkOrderId');
        };
        TemplateMapLayerService.prototype.WorkOrderInstanceMapLayersByWorkOrderSid = function (request) {
            return this._service.call(request, 'Ams/TemplateMapLayer/WorkOrderInstanceMapLayersByWorkOrderSid');
        };
        return TemplateMapLayerService;
    }());
    exports.TemplateMapLayerService = TemplateMapLayerService;
});
