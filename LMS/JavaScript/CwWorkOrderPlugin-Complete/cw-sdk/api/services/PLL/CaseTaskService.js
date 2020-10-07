define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseTaskService = /** @class */ (function () {
        function CaseTaskService(service) {
            this._service = service;
        }
        CaseTaskService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseTask/Add');
        };
        CaseTaskService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseTask/ByCaObjectId');
        };
        CaseTaskService.prototype.ByIds = function (request) {
            return this._service.call(request, 'PLL/CaseTask/ByIds');
        };
        CaseTaskService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseTask/Delete');
        };
        CaseTaskService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseTask/DeleteByCaObjectId');
        };
        CaseTaskService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseTask/Search');
        };
        CaseTaskService.prototype.SetResult = function (request) {
            return this._service.call(request, 'PLL/CaseTask/SetResult');
        };
        CaseTaskService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/CaseTask/Update');
        };
        return CaseTaskService;
    }());
    exports.CaseTaskService = CaseTaskService;
});
