define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var WorkOrderEntityService = /** @class */ (function () {
        function WorkOrderEntityService(service) {
            this._service = service;
        }
        WorkOrderEntityService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/WorkOrderEntity/ByIds');
        };
        WorkOrderEntityService.prototype.CreateSearchDefinition = function (request) {
            return this._service.call(request, 'Ams/WorkOrderEntity/CreateSearchDefinition');
        };
        WorkOrderEntityService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/WorkOrderEntity/Search');
        };
        return WorkOrderEntityService;
    }());
    exports.WorkOrderEntityService = WorkOrderEntityService;
});
