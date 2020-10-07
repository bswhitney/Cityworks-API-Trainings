define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseCorrStatusService = /** @class */ (function () {
        function CaseCorrStatusService(service) {
            this._service = service;
        }
        CaseCorrStatusService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseCorrStatus/Add');
        };
        CaseCorrStatusService.prototype.ByCaCorrectionsIds = function (request) {
            return this._service.call(request, 'PLL/CaseCorrStatus/ByCaCorrectionsIds');
        };
        CaseCorrStatusService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseCorrStatus/Search');
        };
        return CaseCorrStatusService;
    }());
    exports.CaseCorrStatusService = CaseCorrStatusService;
});
