define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var ActivityNotificationService = /** @class */ (function () {
        function ActivityNotificationService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        ActivityNotificationService.prototype.User = function (request) {
            return this._service.call(request, 'General/ActivityNotification/User');
        };
        ActivityNotificationService.prototype.UserWatching = function (request) {
            return this._service.call(request, 'General/ActivityNotification/UserWatching');
        };
        return ActivityNotificationService;
    }());
    exports.ActivityNotificationService = ActivityNotificationService;
});
