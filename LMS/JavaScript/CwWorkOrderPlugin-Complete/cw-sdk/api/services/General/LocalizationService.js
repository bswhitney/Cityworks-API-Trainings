define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var LocalizationService = /** @class */ (function () {
        function LocalizationService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        LocalizationService.prototype.LocalizationSettings = function (request) {
            return this._service.call(request, 'General/Localization/LocalizationSettings');
        };
        LocalizationService.prototype.TimeZones = function (request) {
            return this._service.call(request, 'General/Localization/TimeZones');
        };
        return LocalizationService;
    }());
    exports.LocalizationService = LocalizationService;
});
