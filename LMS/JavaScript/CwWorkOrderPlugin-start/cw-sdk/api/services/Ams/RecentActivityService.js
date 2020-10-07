define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var RecentActivityService = /** @class */ (function () {
        function RecentActivityService(service) {
            this._service = service;
        }
        RecentActivityService.prototype.CaseViewed = function (request) {
            return this._service.call(request, 'Ams/RecentActivity/CaseViewed');
        };
        RecentActivityService.prototype.InspectionViewed = function (request) {
            return this._service.call(request, 'Ams/RecentActivity/InspectionViewed');
        };
        RecentActivityService.prototype.RequestViewed = function (request) {
            return this._service.call(request, 'Ams/RecentActivity/RequestViewed');
        };
        RecentActivityService.prototype.User = function (request) {
            return this._service.call(request, 'Ams/RecentActivity/User');
        };
        RecentActivityService.prototype.WorkOrderViewed = function (request) {
            return this._service.call(request, 'Ams/RecentActivity/WorkOrderViewed');
        };
        return RecentActivityService;
    }());
    exports.RecentActivityService = RecentActivityService;
});
