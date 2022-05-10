define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseAddressService = /** @class */ (function () {
        function CaseAddressService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CaseAddressService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseAddress/Add');
        };
        CaseAddressService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseAddress/ByCaObjectId');
        };
        CaseAddressService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseAddress/Delete');
        };
        CaseAddressService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseAddress/DeleteByCaObjectId');
        };
        CaseAddressService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseAddress/Search');
        };
        CaseAddressService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseAddress/SearchObject');
        };
        return CaseAddressService;
    }());
    exports.CaseAddressService = CaseAddressService;
});
