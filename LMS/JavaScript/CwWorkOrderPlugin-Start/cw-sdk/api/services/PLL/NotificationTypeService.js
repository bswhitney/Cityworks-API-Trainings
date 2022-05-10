define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var NotificationTypeService = /** @class */ (function () {
        function NotificationTypeService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        NotificationTypeService.prototype.GetNotificationTypeList = function (request) {
            return this._service.call(request, 'PLL/NotificationType/GetNotificationTypeList');
        };
        return NotificationTypeService;
    }());
    exports.NotificationTypeService = NotificationTypeService;
});
