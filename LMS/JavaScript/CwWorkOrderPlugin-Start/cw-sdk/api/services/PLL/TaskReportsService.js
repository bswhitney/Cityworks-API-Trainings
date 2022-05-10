define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var TaskReportsService = /** @class */ (function () {
        function TaskReportsService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        TaskReportsService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/TaskReports/Add');
        };
        TaskReportsService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/TaskReports/Update');
        };
        return TaskReportsService;
    }());
    exports.TaskReportsService = TaskReportsService;
});
