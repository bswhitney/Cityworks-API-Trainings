define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CasePeopleService = /** @class */ (function () {
        function CasePeopleService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CasePeopleService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CasePeople/Add');
        };
        CasePeopleService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CasePeople/ByCaObjectId');
        };
        CasePeopleService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CasePeople/Delete');
        };
        CasePeopleService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CasePeople/DeleteByCaObjectId');
        };
        CasePeopleService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CasePeople/Search');
        };
        CasePeopleService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CasePeople/SearchObject');
        };
        return CasePeopleService;
    }());
    exports.CasePeopleService = CasePeopleService;
});
