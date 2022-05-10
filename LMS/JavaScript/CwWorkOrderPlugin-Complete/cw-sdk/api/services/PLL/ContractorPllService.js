define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var ContractorPllService = /** @class */ (function () {
        function ContractorPllService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        ContractorPllService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/ContractorPll/SearchObject');
        };
        return ContractorPllService;
    }());
    exports.ContractorPllService = ContractorPllService;
});
