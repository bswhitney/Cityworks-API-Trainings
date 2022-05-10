define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var MaterialService = /** @class */ (function () {
        function MaterialService(service) {
            this.ErrorCodes = {
                InvalidMaterialSid: 3,
                Unauthorized: 9,
                ErrorDeletingMaterial: 12,
                InvalidField: 14,
                ErrorNotAuthorizedToAddMaterial: 15,
                ErrorNotAuthorizedToUpdateMaterial: 16,
                ErrorAddingMaterial: 17,
                ErrorUpdatingMaterial: 18,
                InvalidCustomFieldConfiguration: 19,
                InvalidCustomFieldValues: 20
            };
            this.WarningCodes = {};
            this._service = service;
        }
        MaterialService.prototype.Add = function (request) {
            return this._service.call(request, 'Ams/Material/Add');
        };
        MaterialService.prototype.All = function (request) {
            return this._service.call(request, 'Ams/Material/All');
        };
        MaterialService.prototype.ById = function (request) {
            return this._service.call(request, 'Ams/Material/ById');
        };
        MaterialService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/Material/ByIds');
        };
        MaterialService.prototype.ByParent = function (request) {
            return this._service.call(request, 'Ams/Material/ByParent');
        };
        MaterialService.prototype.ByStoreroom = function (request) {
            return this._service.call(request, 'Ams/Material/ByStoreroom');
        };
        MaterialService.prototype.ByStoreroomAndId = function (request) {
            return this._service.call(request, 'Ams/Material/ByStoreroomAndId');
        };
        MaterialService.prototype.CustomDataFields = function (request) {
            return this._service.call(request, 'Ams/Material/CustomDataFields');
        };
        MaterialService.prototype.Delete = function (request) {
            return this._service.call(request, 'Ams/Material/Delete');
        };
        MaterialService.prototype.Keywords = function (request) {
            return this._service.call(request, 'Ams/Material/Keywords');
        };
        MaterialService.prototype.MaterialBom = function (request) {
            return this._service.call(request, 'Ams/Material/MaterialBom');
        };
        MaterialService.prototype.MaterialCategories = function (request) {
            return this._service.call(request, 'Ams/Material/MaterialCategories');
        };
        MaterialService.prototype.MaterialNodes = function (request) {
            return this._service.call(request, 'Ams/Material/MaterialNodes');
        };
        MaterialService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/Material/Search');
        };
        MaterialService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/Material/Update');
        };
        return MaterialService;
    }());
    exports.MaterialService = MaterialService;
});
