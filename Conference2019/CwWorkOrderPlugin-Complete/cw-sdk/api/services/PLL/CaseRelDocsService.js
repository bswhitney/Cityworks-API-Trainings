define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseRelDocsService = /** @class */ (function () {
        function CaseRelDocsService(service) {
            this._service = service;
        }
        CaseRelDocsService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseRelDocs/Add');
        };
        CaseRelDocsService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseRelDocs/ByCaObjectId');
        };
        CaseRelDocsService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseRelDocs/Delete');
        };
        CaseRelDocsService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseRelDocs/DeleteByCaObjectId');
        };
        CaseRelDocsService.prototype.GetStoragePreferences = function (request) {
            return this._service.call(request, 'PLL/CaseRelDocs/GetStoragePreferences');
        };
        CaseRelDocsService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseRelDocs/Search');
        };
        return CaseRelDocsService;
    }());
    exports.CaseRelDocsService = CaseRelDocsService;
});
