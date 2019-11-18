define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseInspectionRequestService = /** @class */ (function () {
        function CaseInspectionRequestService(service) {
            this._service = service;
        }
        CaseInspectionRequestService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseInspectionRequest/Add');
        };
        CaseInspectionRequestService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseInspectionRequest/ByCaObjectId');
        };
        CaseInspectionRequestService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseInspectionRequest/Delete');
        };
        CaseInspectionRequestService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseInspectionRequest/DeleteByCaObjectId');
        };
        CaseInspectionRequestService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseInspectionRequest/Search');
        };
        return CaseInspectionRequestService;
    }());
    exports.CaseInspectionRequestService = CaseInspectionRequestService;
});
