define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var NotificationCaseService = /** @class */ (function () {
        function NotificationCaseService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        NotificationCaseService.prototype.GetNotificationCaseList = function (request) {
            return this._service.call(request, 'PLL/NotificationCase/GetNotificationCaseList');
        };
        return NotificationCaseService;
    }());
    exports.NotificationCaseService = NotificationCaseService;
});
