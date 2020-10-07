define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseViolationsService = /** @class */ (function () {
        function CaseViolationsService(service) {
            this._service = service;
        }
        CaseViolationsService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseViolations/Add');
        };
        CaseViolationsService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseViolations/ByCaObjectId');
        };
        CaseViolationsService.prototype.CompleteViolations = function (request) {
            return this._service.call(request, 'PLL/CaseViolations/CompleteViolations');
        };
        CaseViolationsService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseViolations/Delete');
        };
        CaseViolationsService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseViolations/DeleteByCaObjectId');
        };
        CaseViolationsService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseViolations/Search');
        };
        return CaseViolationsService;
    }());
    exports.CaseViolationsService = CaseViolationsService;
});
