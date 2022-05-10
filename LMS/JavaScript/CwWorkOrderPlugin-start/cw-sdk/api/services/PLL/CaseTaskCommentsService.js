define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseTaskCommentsService = /** @class */ (function () {
        function CaseTaskCommentsService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CaseTaskCommentsService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseTaskComments/Add');
        };
        CaseTaskCommentsService.prototype.ByCaTaskId = function (request) {
            return this._service.call(request, 'PLL/CaseTaskComments/ByCaTaskId');
        };
        CaseTaskCommentsService.prototype.ByCaTaskIds = function (request) {
            return this._service.call(request, 'PLL/CaseTaskComments/ByCaTaskIds');
        };
        CaseTaskCommentsService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseTaskComments/Delete');
        };
        CaseTaskCommentsService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/CaseTaskComments/Update');
        };
        return CaseTaskCommentsService;
    }());
    exports.CaseTaskCommentsService = CaseTaskCommentsService;
});
