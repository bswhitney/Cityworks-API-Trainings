define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseTaskResultsService = /** @class */ (function () {
        function CaseTaskResultsService(service) {
            this._service = service;
        }
        CaseTaskResultsService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseTaskResults/Add');
        };
        CaseTaskResultsService.prototype.ByCaTaskIds = function (request) {
            return this._service.call(request, 'PLL/CaseTaskResults/ByCaTaskIds');
        };
        CaseTaskResultsService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseTaskResults/SearchObject');
        };
        return CaseTaskResultsService;
    }());
    exports.CaseTaskResultsService = CaseTaskResultsService;
});
