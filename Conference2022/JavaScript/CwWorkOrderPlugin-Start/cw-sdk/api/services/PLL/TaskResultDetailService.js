define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var TaskResultDetailService = /** @class */ (function () {
        function TaskResultDetailService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        TaskResultDetailService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/TaskResultDetail/Add');
        };
        TaskResultDetailService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/TaskResultDetail/Update');
        };
        return TaskResultDetailService;
    }());
    exports.TaskResultDetailService = TaskResultDetailService;
});
