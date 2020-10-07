define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var QuickSearchService = /** @class */ (function () {
        function QuickSearchService(service) {
            this._service = service;
        }
        QuickSearchService.prototype.QuickSearch = function (request) {
            return this._service.call(request, 'General/QuickSearch/QuickSearch');
        };
        return QuickSearchService;
    }());
    exports.QuickSearchService = QuickSearchService;
});
