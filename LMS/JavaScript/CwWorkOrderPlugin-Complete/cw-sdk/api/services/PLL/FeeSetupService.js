define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var FeeSetupService = /** @class */ (function () {
        function FeeSetupService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        FeeSetupService.prototype.All = function (request) {
            return this._service.call(request, 'PLL/FeeSetup/All');
        };
        FeeSetupService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/FeeSetup/Search');
        };
        return FeeSetupService;
    }());
    exports.FeeSetupService = FeeSetupService;
});
