define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseLicenseService = /** @class */ (function () {
        function CaseLicenseService(service) {
            this._service = service;
        }
        CaseLicenseService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseLicense/Add');
        };
        CaseLicenseService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseLicense/ByCaObjectId');
        };
        CaseLicenseService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseLicense/Delete');
        };
        CaseLicenseService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseLicense/DeleteByCaObjectId');
        };
        CaseLicenseService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseLicense/Search');
        };
        return CaseLicenseService;
    }());
    exports.CaseLicenseService = CaseLicenseService;
});
