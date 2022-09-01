define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseContractorService = /** @class */ (function () {
        function CaseContractorService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CaseContractorService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseContractor/Add');
        };
        CaseContractorService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseContractor/ByCaObjectId');
        };
        CaseContractorService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseContractor/DeleteByCaObjectId');
        };
        CaseContractorService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseContractor/Search');
        };
        CaseContractorService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseContractor/SearchObject');
        };
        return CaseContractorService;
    }());
    exports.CaseContractorService = CaseContractorService;
});
