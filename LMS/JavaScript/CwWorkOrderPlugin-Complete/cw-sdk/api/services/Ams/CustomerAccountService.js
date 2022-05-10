define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CustomerAccountService = /** @class */ (function () {
        function CustomerAccountService(service) {
            this.ErrorCodes = {
                UnknownError: 1
            };
            this.WarningCodes = {};
            this._service = service;
        }
        CustomerAccountService.prototype.Add = function (request) {
            return this._service.call(request, 'Ams/CustomerAccount/Add');
        };
        CustomerAccountService.prototype.ByAccountNumbers = function (request) {
            return this._service.call(request, 'Ams/CustomerAccount/ByAccountNumbers');
        };
        CustomerAccountService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/CustomerAccount/ByIds');
        };
        CustomerAccountService.prototype.Delete = function (request) {
            return this._service.call(request, 'Ams/CustomerAccount/Delete');
        };
        CustomerAccountService.prototype.Import = function (request) {
            return this._service.call(request, 'Ams/CustomerAccount/Import');
        };
        CustomerAccountService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/CustomerAccount/Search');
        };
        CustomerAccountService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/CustomerAccount/Update');
        };
        return CustomerAccountService;
    }());
    exports.CustomerAccountService = CustomerAccountService;
});
