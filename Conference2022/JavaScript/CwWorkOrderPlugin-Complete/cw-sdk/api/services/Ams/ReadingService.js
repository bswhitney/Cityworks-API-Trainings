define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var ReadingService = /** @class */ (function () {
        function ReadingService(service) {
            this.ErrorCodes = {
                ErrorDeletingReading: 2,
                ReadingIdsRequired: 3
            };
            this.WarningCodes = {};
            this._service = service;
        }
        ReadingService.prototype.Add = function (request) {
            return this._service.call(request, 'Ams/Reading/Add');
        };
        ReadingService.prototype.ByEntity = function (request) {
            return this._service.call(request, 'Ams/Reading/ByEntity');
        };
        ReadingService.prototype.Configuration = function (request) {
            return this._service.call(request, 'Ams/Reading/Configuration');
        };
        ReadingService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/Reading/Update');
        };
        return ReadingService;
    }());
    exports.ReadingService = ReadingService;
});
