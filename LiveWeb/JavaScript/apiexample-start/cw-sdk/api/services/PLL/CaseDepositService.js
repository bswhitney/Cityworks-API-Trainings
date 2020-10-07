define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseDepositService = /** @class */ (function () {
        function CaseDepositService(service) {
            this._service = service;
        }
        CaseDepositService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseDeposit/Add');
        };
        CaseDepositService.prototype.AddDefault = function (request) {
            return this._service.call(request, 'PLL/CaseDeposit/AddDefault');
        };
        CaseDepositService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseDeposit/ByCaObjectId');
        };
        CaseDepositService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseDeposit/Delete');
        };
        CaseDepositService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseDeposit/DeleteByCaObjectId');
        };
        CaseDepositService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseDeposit/Search');
        };
        return CaseDepositService;
    }());
    exports.CaseDepositService = CaseDepositService;
});
