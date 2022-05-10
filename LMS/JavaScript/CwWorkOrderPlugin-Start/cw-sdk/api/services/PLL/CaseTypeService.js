define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseTypeService = /** @class */ (function () {
        function CaseTypeService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CaseTypeService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseType/Add');
        };
        CaseTypeService.prototype.GetList = function (request) {
            return this._service.call(request, 'PLL/CaseType/GetList');
        };
        CaseTypeService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseType/Search');
        };
        CaseTypeService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseType/SearchObject');
        };
        CaseTypeService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/CaseType/Update');
        };
        return CaseTypeService;
    }());
    exports.CaseTypeService = CaseTypeService;
});
