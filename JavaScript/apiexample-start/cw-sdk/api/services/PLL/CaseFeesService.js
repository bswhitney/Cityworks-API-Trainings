define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseFeesService = /** @class */ (function () {
        function CaseFeesService(service) {
            this._service = service;
        }
        CaseFeesService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseFees/Add');
        };
        CaseFeesService.prototype.AddDefault = function (request) {
            return this._service.call(request, 'PLL/CaseFees/AddDefault');
        };
        CaseFeesService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseFees/ByCaObjectId');
        };
        CaseFeesService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseFees/Delete');
        };
        CaseFeesService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseFees/DeleteByCaObjectId');
        };
        CaseFeesService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseFees/Search');
        };
        return CaseFeesService;
    }());
    exports.CaseFeesService = CaseFeesService;
});
