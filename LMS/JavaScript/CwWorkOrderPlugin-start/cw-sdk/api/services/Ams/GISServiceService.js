define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var GISServiceService = /** @class */ (function () {
        function GISServiceService(service) {
            this._service = service;
        }
        GISServiceService.prototype.AddGISServiceDefinition = function (request) {
            return this._service.call(request, 'Ams/GISService/AddGISServiceDefinition');
        };
        GISServiceService.prototype.AddGISServiceEndPointSecurity = function (request) {
            return this._service.call(request, 'Ams/GISService/AddGISServiceEndPointSecurity');
        };
        GISServiceService.prototype.CloneGISServiceDefinition = function (request) {
            return this._service.call(request, 'Ams/GISService/CloneGISServiceDefinition');
        };
        GISServiceService.prototype.DeleteGISServiceDefinitions = function (request) {
            return this._service.call(request, 'Ams/GISService/DeleteGISServiceDefinitions');
        };
        GISServiceService.prototype.DeleteGISServiceEndPointSecurities = function (request) {
            return this._service.call(request, 'Ams/GISService/DeleteGISServiceEndPointSecurities');
        };
        GISServiceService.prototype.GISServiceDefinitions = function (request) {
            return this._service.call(request, 'Ams/GISService/GISServiceDefinitions');
        };
        GISServiceService.prototype.UpdateGISServiceEndPointSecurity = function (request) {
            return this._service.call(request, 'Ams/GISService/UpdateGISServiceEndPointSecurity');
        };
        GISServiceService.prototype.ValidateServiceSecurity = function (request) {
            return this._service.call(request, 'Ams/GISService/ValidateServiceSecurity');
        };
        return GISServiceService;
    }());
    exports.GISServiceService = GISServiceService;
});
