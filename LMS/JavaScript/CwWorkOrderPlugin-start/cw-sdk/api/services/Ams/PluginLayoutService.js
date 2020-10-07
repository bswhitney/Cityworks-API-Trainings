define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var PluginLayoutService = /** @class */ (function () {
        function PluginLayoutService(service) {
            this._service = service;
        }
        PluginLayoutService.prototype.Definition = function (request) {
            return this._service.call(request, 'Ams/PluginLayout/Definition');
        };
        PluginLayoutService.prototype.Definitions = function (request) {
            return this._service.call(request, 'Ams/PluginLayout/Definitions');
        };
        PluginLayoutService.prototype.Public = function (request) {
            return this._service.call(request, 'Ams/PluginLayout/Public');
        };
        PluginLayoutService.prototype.PublicDefinitions = function (request) {
            return this._service.call(request, 'Ams/PluginLayout/PublicDefinitions');
        };
        return PluginLayoutService;
    }());
    exports.PluginLayoutService = PluginLayoutService;
});
