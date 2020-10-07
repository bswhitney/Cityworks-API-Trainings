define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseDataListValuesService = /** @class */ (function () {
        function CaseDataListValuesService(service) {
            this._service = service;
        }
        CaseDataListValuesService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseDataListValues/Add');
        };
        CaseDataListValuesService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseDataListValues/Delete');
        };
        CaseDataListValuesService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseDataListValues/Search');
        };
        CaseDataListValuesService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseDataListValues/SearchObject');
        };
        return CaseDataListValuesService;
    }());
    exports.CaseDataListValuesService = CaseDataListValuesService;
});
