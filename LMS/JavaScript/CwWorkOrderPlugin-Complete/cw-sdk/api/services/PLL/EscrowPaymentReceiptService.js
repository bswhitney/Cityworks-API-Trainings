define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var EscrowPaymentReceiptService = /** @class */ (function () {
        function EscrowPaymentReceiptService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        EscrowPaymentReceiptService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/EscrowPaymentReceipt/Add');
        };
        EscrowPaymentReceiptService.prototype.GetList = function (request) {
            return this._service.call(request, 'PLL/EscrowPaymentReceipt/GetList');
        };
        EscrowPaymentReceiptService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/EscrowPaymentReceipt/Update');
        };
        return EscrowPaymentReceiptService;
    }());
    exports.EscrowPaymentReceiptService = EscrowPaymentReceiptService;
});
