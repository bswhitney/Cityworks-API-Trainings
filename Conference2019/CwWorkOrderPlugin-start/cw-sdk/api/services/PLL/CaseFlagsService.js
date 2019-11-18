define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseFlagsService = /** @class */ (function () {
        function CaseFlagsService(service) {
            this._service = service;
        }
        CaseFlagsService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseFlags/Add');
        };
        CaseFlagsService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseFlags/ByCaObjectId');
        };
        CaseFlagsService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseFlags/Delete');
        };
        CaseFlagsService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseFlags/DeleteByCaObjectId');
        };
        CaseFlagsService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseFlags/Search');
        };
        return CaseFlagsService;
    }());
    exports.CaseFlagsService = CaseFlagsService;
});
