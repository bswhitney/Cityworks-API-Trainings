define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseInstrumentService = /** @class */ (function () {
        function CaseInstrumentService(service) {
            this._service = service;
        }
        CaseInstrumentService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseInstrument/Add');
        };
        CaseInstrumentService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseInstrument/ByCaObjectId');
        };
        CaseInstrumentService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseInstrument/Delete');
        };
        CaseInstrumentService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseInstrument/DeleteByCaObjectId');
        };
        CaseInstrumentService.prototype.GetList = function (request) {
            return this._service.call(request, 'PLL/CaseInstrument/GetList');
        };
        CaseInstrumentService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseInstrument/Search');
        };
        return CaseInstrumentService;
    }());
    exports.CaseInstrumentService = CaseInstrumentService;
});
