define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var EventLayerService = /** @class */ (function () {
        function EventLayerService(service) {
            this._service = service;
        }
        EventLayerService.prototype.All = function (request) {
            return this._service.call(request, 'Ams/EventLayer/All');
        };
        EventLayerService.prototype.ById = function (request) {
            return this._service.call(request, 'Ams/EventLayer/ById');
        };
        return EventLayerService;
    }());
    exports.EventLayerService = EventLayerService;
});
