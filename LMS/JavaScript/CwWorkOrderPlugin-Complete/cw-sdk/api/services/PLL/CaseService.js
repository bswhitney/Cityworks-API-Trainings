define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseService = /** @class */ (function () {
        function CaseService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CaseService.prototype.Create = function (request) {
            return this._service.call(request, 'PLL/Case/Create');
        };
        CaseService.prototype.CreateChild = function (request) {
            return this._service.call(request, 'PLL/Case/CreateChild');
        };
        CaseService.prototype.CreateFromIntake = function (request) {
            return this._service.call(request, 'PLL/Case/CreateFromIntake');
        };
        CaseService.prototype.CreateFromWorkOrder = function (request) {
            return this._service.call(request, 'PLL/Case/CreateFromWorkOrder');
        };
        CaseService.prototype.GetDefaultItems = function (request) {
            return this._service.call(request, 'PLL/Case/GetDefaultItems');
        };
        return CaseService;
    }());
    exports.CaseService = CaseService;
});
