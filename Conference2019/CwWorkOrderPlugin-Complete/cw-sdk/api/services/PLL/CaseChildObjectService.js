define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseChildObjectService = /** @class */ (function () {
        function CaseChildObjectService(service) {
            this._service = service;
        }
        CaseChildObjectService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseChildObject/ByCaObjectId');
        };
        CaseChildObjectService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseChildObject/DeleteByCaObjectId');
        };
        CaseChildObjectService.prototype.GetList = function (request) {
            return this._service.call(request, 'PLL/CaseChildObject/GetList');
        };
        CaseChildObjectService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseChildObject/Search');
        };
        CaseChildObjectService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseChildObject/SearchObject');
        };
        return CaseChildObjectService;
    }());
    exports.CaseChildObjectService = CaseChildObjectService;
});
