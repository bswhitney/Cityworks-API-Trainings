define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var EscrowPaymentService = /** @class */ (function () {
        function EscrowPaymentService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        EscrowPaymentService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/EscrowPayment/Add');
        };
        EscrowPaymentService.prototype.GetList = function (request) {
            return this._service.call(request, 'PLL/EscrowPayment/GetList');
        };
        EscrowPaymentService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/EscrowPayment/Update');
        };
        return EscrowPaymentService;
    }());
    exports.EscrowPaymentService = EscrowPaymentService;
});