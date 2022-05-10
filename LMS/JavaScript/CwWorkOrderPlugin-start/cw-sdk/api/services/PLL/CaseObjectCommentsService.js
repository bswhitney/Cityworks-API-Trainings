define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseObjectCommentsService = /** @class */ (function () {
        function CaseObjectCommentsService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CaseObjectCommentsService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseObjectComments/Add');
        };
        CaseObjectCommentsService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseObjectComments/ByCaObjectId');
        };
        CaseObjectCommentsService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseObjectComments/Delete');
        };
        CaseObjectCommentsService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/CaseObjectComments/Update');
        };
        return CaseObjectCommentsService;
    }());
    exports.CaseObjectCommentsService = CaseObjectCommentsService;
});
