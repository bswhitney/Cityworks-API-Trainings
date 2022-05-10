define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var BusinessCaseService = /** @class */ (function () {
        function BusinessCaseService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        BusinessCaseService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/BusinessCase/Add');
        };
        BusinessCaseService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/BusinessCase/Update');
        };
        return BusinessCaseService;
    }());
    exports.BusinessCaseService = BusinessCaseService;
});
