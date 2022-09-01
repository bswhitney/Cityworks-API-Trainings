define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var TokenService = /** @class */ (function () {
        function TokenService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        TokenService.prototype.RevokeUser = function (request) {
            return this._service.call(request, 'General/Token/RevokeUser');
        };
        return TokenService;
    }());
    exports.TokenService = TokenService;
});
