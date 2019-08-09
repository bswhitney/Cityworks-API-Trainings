define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseAssetService = /** @class */ (function () {
        function CaseAssetService(service) {
            this._service = service;
        }
        CaseAssetService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseAsset/ByCaObjectId');
        };
        CaseAssetService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseAsset/DeleteByCaObjectId');
        };
        CaseAssetService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseAsset/Search');
        };
        CaseAssetService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseAsset/SearchObject');
        };
        return CaseAssetService;
    }());
    exports.CaseAssetService = CaseAssetService;
});
