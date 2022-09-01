define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var WebHookEventService = /** @class */ (function () {
        function WebHookEventService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        WebHookEventService.prototype.ProcessMessages = function (request) {
            return this._service.call(request, 'General/WebHookEvent/ProcessMessages');
        };
        return WebHookEventService;
    }());
    exports.WebHookEventService = WebHookEventService;
});
