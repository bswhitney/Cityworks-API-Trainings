define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseFeesDataDetailService = /** @class */ (function () {
        function CaseFeesDataDetailService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CaseFeesDataDetailService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseFeesDataDetail/Add');
        };
        CaseFeesDataDetailService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseFeesDataDetail/Delete');
        };
        CaseFeesDataDetailService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseFeesDataDetail/Search');
        };
        return CaseFeesDataDetailService;
    }());
    exports.CaseFeesDataDetailService = CaseFeesDataDetailService;
});
