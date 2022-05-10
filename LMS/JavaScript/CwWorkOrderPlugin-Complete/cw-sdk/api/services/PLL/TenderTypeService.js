define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var TenderTypeService = /** @class */ (function () {
        function TenderTypeService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        TenderTypeService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/TenderType/Add');
        };
        TenderTypeService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/TenderType/Update');
        };
        return TenderTypeService;
    }());
    exports.TenderTypeService = TenderTypeService;
});
