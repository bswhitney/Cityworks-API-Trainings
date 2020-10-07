define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseDataDetailService = /** @class */ (function () {
        function CaseDataDetailService(service) {
            this._service = service;
        }
        CaseDataDetailService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseDataDetail/Add');
        };
        CaseDataDetailService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseDataDetail/Search');
        };
        CaseDataDetailService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseDataDetail/SearchObject');
        };
        CaseDataDetailService.prototype.WIPAdd = function (request) {
            return this._service.call(request, 'PLL/CaseDataDetail/WIPAdd');
        };
        return CaseDataDetailService;
    }());
    exports.CaseDataDetailService = CaseDataDetailService;
});
