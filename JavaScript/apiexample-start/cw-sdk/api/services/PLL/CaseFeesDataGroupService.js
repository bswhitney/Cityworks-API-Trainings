define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseFeesDataGroupService = /** @class */ (function () {
        function CaseFeesDataGroupService(service) {
            this._service = service;
        }
        CaseFeesDataGroupService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseFeesDataGroup/Add');
        };
        CaseFeesDataGroupService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseFeesDataGroup/Delete');
        };
        CaseFeesDataGroupService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseFeesDataGroup/Search');
        };
        return CaseFeesDataGroupService;
    }());
    exports.CaseFeesDataGroupService = CaseFeesDataGroupService;
});
