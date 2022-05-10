define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var ContractorTypeService = /** @class */ (function () {
        function ContractorTypeService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        ContractorTypeService.prototype.All = function (request) {
            return this._service.call(request, 'PLL/ContractorType/All');
        };
        ContractorTypeService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/ContractorType/Search');
        };
        ContractorTypeService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/ContractorType/SearchObject');
        };
        return ContractorTypeService;
    }());
    exports.ContractorTypeService = ContractorTypeService;
});
