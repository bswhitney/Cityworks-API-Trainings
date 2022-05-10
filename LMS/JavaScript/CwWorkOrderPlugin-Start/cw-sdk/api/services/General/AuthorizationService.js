define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var AuthorizationService = /** @class */ (function () {
        function AuthorizationService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        AuthorizationService.prototype.LicensedApiCheck = function (request) {
            return this._service.call(request, 'General/Authorization/LicensedApiCheck');
        };
        AuthorizationService.prototype.LicensedExtensionCheck = function (request) {
            return this._service.call(request, 'General/Authorization/LicensedExtensionCheck');
        };
        AuthorizationService.prototype.LicensedExtensionsCheck = function (request) {
            return this._service.call(request, 'General/Authorization/LicensedExtensionsCheck');
        };
        AuthorizationService.prototype.LicensedFeatureCheck = function (request) {
            return this._service.call(request, 'General/Authorization/LicensedFeatureCheck');
        };
        AuthorizationService.prototype.LicensedFeaturesCheck = function (request) {
            return this._service.call(request, 'General/Authorization/LicensedFeaturesCheck');
        };
        AuthorizationService.prototype.LicensedServicesCheck = function (request) {
            return this._service.call(request, 'General/Authorization/LicensedServicesCheck');
        };
        return AuthorizationService;
    }());
    exports.AuthorizationService = AuthorizationService;
});
