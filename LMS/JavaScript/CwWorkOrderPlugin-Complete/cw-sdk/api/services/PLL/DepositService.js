define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var DepositService = /** @class */ (function () {
        function DepositService(service) {
            this._service = service;
        }
        DepositService.prototype.All = function (request) {
            return this._service.call(request, 'PLL/Deposit/All');
        };
        DepositService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/Deposit/Search');
        };
        return DepositService;
    }());
    exports.DepositService = DepositService;
});
