define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var TaskResultFeeInsertService = /** @class */ (function () {
        function TaskResultFeeInsertService(service) {
            this._service = service;
        }
        TaskResultFeeInsertService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/TaskResultFeeInsert/Add');
        };
        TaskResultFeeInsertService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/TaskResultFeeInsert/Delete');
        };
        TaskResultFeeInsertService.prototype.DeleteByTaskId = function (request) {
            return this._service.call(request, 'PLL/TaskResultFeeInsert/DeleteByTaskId');
        };
        TaskResultFeeInsertService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/TaskResultFeeInsert/Update');
        };
        return TaskResultFeeInsertService;
    }());
    exports.TaskResultFeeInsertService = TaskResultFeeInsertService;
});
