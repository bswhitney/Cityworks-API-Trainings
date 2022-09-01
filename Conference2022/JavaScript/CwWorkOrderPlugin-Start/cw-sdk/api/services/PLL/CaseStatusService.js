define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseStatusService = /** @class */ (function () {
        function CaseStatusService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CaseStatusService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseStatus/Add');
        };
        CaseStatusService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseStatus/Delete');
        };
        CaseStatusService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseStatus/Search');
        };
        CaseStatusService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseStatus/SearchObject');
        };
        CaseStatusService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/CaseStatus/Update');
        };
        return CaseStatusService;
    }());
    exports.CaseStatusService = CaseStatusService;
});
