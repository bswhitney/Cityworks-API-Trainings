define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseConditionService = /** @class */ (function () {
        function CaseConditionService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CaseConditionService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseCondition/Add');
        };
        CaseConditionService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseCondition/ByCaObjectId');
        };
        CaseConditionService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseCondition/DeleteByCaObjectId');
        };
        CaseConditionService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseCondition/Search');
        };
        CaseConditionService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseCondition/SearchObject');
        };
        return CaseConditionService;
    }());
    exports.CaseConditionService = CaseConditionService;
});
