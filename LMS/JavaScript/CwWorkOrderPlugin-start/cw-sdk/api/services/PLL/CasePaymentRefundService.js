define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CasePaymentRefundService = /** @class */ (function () {
        function CasePaymentRefundService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CasePaymentRefundService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CasePaymentRefund/Add');
        };
        CasePaymentRefundService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CasePaymentRefund/Delete');
        };
        CasePaymentRefundService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CasePaymentRefund/Search');
        };
        CasePaymentRefundService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/CasePaymentRefund/Update');
        };
        return CasePaymentRefundService;
    }());
    exports.CasePaymentRefundService = CasePaymentRefundService;
});
