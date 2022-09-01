define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseReceiptService = /** @class */ (function () {
        function CaseReceiptService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        CaseReceiptService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseReceipt/Add');
        };
        CaseReceiptService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseReceipt/Search');
        };
        CaseReceiptService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseReceipt/SearchObject');
        };
        return CaseReceiptService;
    }());
    exports.CaseReceiptService = CaseReceiptService;
});
