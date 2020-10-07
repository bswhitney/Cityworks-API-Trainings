define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CasePaymentService = /** @class */ (function () {
        function CasePaymentService(service) {
            this._service = service;
        }
        CasePaymentService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CasePayment/Add');
        };
        CasePaymentService.prototype.AddDeposit = function (request) {
            return this._service.call(request, 'PLL/CasePayment/AddDeposit');
        };
        CasePaymentService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CasePayment/ByCaObjectId');
        };
        CasePaymentService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CasePayment/Delete');
        };
        CasePaymentService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CasePayment/DeleteByCaObjectId');
        };
        CasePaymentService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CasePayment/Search');
        };
        return CasePaymentService;
    }());
    exports.CasePaymentService = CasePaymentService;
});
