define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var MapServiceService = /** @class */ (function () {
        function MapServiceService(service) {
            this._service = service;
        }
        MapServiceService.prototype.Configuration = function (request) {
            return this._service.call(request, 'Gis/MapService/Configuration');
        };
        MapServiceService.prototype.Domain = function (request) {
            return this._service.call(request, 'Gis/MapService/Domain');
        };
        MapServiceService.prototype.DownloadMobileMapCache = function (request) {
            return this._service.call(request, 'Gis/MapService/DownloadMobileMapCache');
        };
        MapServiceService.prototype.User = function (request) {
            return this._service.call(request, 'Gis/MapService/User');
        };
        return MapServiceService;
    }());
    exports.MapServiceService = MapServiceService;
});
