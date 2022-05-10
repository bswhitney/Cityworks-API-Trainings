define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var AppDataService = /** @class */ (function () {
        function AppDataService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        AppDataService.prototype.CurrentLocation = function (request) {
            return this._service.call(request, 'General/AppData/CurrentLocation');
        };
        AppDataService.prototype.SelectedEntities = function (request) {
            return this._service.call(request, 'General/AppData/SelectedEntities');
        };
        return AppDataService;
    }());
    exports.AppDataService = AppDataService;
});
