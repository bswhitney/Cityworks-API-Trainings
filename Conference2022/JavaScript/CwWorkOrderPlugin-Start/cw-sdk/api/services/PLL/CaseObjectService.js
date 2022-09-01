define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseObjectService = /** @class */ (function () {
        function CaseObjectService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CaseObjectService.prototype.ByIds = function (request) {
            return this._service.call(request, 'PLL/CaseObject/ByIds');
        };
        CaseObjectService.prototype.CreateCaseFromServiceRequest = function (request) {
            return this._service.call(request, 'PLL/CaseObject/CreateCaseFromServiceRequest');
        };
        CaseObjectService.prototype.DeleteCase = function (request) {
            return this._service.call(request, 'PLL/CaseObject/DeleteCase');
        };
        CaseObjectService.prototype.Move = function (request) {
            return this._service.call(request, 'PLL/CaseObject/Move');
        };
        CaseObjectService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseObject/Search');
        };
        return CaseObjectService;
    }());
    exports.CaseObjectService = CaseObjectService;
});
