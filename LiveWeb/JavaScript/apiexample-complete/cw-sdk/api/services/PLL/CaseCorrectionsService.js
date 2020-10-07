define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseCorrectionsService = /** @class */ (function () {
        function CaseCorrectionsService(service) {
            this._service = service;
        }
        CaseCorrectionsService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseCorrections/Add');
        };
        CaseCorrectionsService.prototype.ByCaTaskIds = function (request) {
            return this._service.call(request, 'PLL/CaseCorrections/ByCaTaskIds');
        };
        CaseCorrectionsService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseCorrections/Search');
        };
        CaseCorrectionsService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/CaseCorrections/Update');
        };
        return CaseCorrectionsService;
    }());
    exports.CaseCorrectionsService = CaseCorrectionsService;
});
