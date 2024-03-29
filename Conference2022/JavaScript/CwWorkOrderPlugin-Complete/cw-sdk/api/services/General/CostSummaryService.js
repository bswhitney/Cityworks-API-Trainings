define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CostSummaryService = /** @class */ (function () {
        function CostSummaryService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CostSummaryService.prototype.WorkOrderEntity = function (request) {
            return this._service.call(request, 'General/CostSummary/WorkOrderEntity');
        };
        CostSummaryService.prototype.WorkOrderEntitySearch = function (request) {
            return this._service.call(request, 'General/CostSummary/WorkOrderEntitySearch');
        };
        return CostSummaryService;
    }());
    exports.CostSummaryService = CostSummaryService;
});
