define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var ActivityLinkService = /** @class */ (function () {
        function ActivityLinkService(service) {
            this.ErrorCodes = {
                CannotLinkToSelf: 2,
                DeleteFailed: 3,
                MissingField: 4,
                ActivityDoesNotExist: 5,
                InvalidActivityId: 6,
                CannotAddParentLinks: 7,
                CannotDeleteParentLinks: 8
            };
            this.WarningCodes = {};
            this._service = service;
        }
        ActivityLinkService.prototype.Add = function (request) {
            return this._service.call(request, 'General/ActivityLink/Add');
        };
        ActivityLinkService.prototype.ByActivityIds = function (request) {
            return this._service.call(request, 'General/ActivityLink/ByActivityIds');
        };
        ActivityLinkService.prototype.ByActivitySids = function (request) {
            return this._service.call(request, 'General/ActivityLink/ByActivitySids');
        };
        ActivityLinkService.prototype.CloneByActivitySid = function (request) {
            return this._service.call(request, 'General/ActivityLink/CloneByActivitySid');
        };
        ActivityLinkService.prototype.Delete = function (request) {
            return this._service.call(request, 'General/ActivityLink/Delete');
        };
        ActivityLinkService.prototype.Remove = function (request) {
            return this._service.call(request, 'General/ActivityLink/Remove');
        };
        return ActivityLinkService;
    }());
    exports.ActivityLinkService = ActivityLinkService;
});
