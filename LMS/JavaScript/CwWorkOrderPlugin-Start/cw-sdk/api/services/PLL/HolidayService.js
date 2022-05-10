define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var HolidayService = /** @class */ (function () {
        function HolidayService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        HolidayService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/Holiday/Add');
        };
        HolidayService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/Holiday/Delete');
        };
        return HolidayService;
    }());
    exports.HolidayService = HolidayService;
});
