define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var EquipmentService = /** @class */ (function () {
        function EquipmentService(service) {
            this.ErrorCodes = {
                NotAuthorizedToCreateEquipment: 5,
                InvalidField: 30,
                ErrorCreatingEquipment: 31
            };
            this.WarningCodes = {};
            this._service = service;
        }
        EquipmentService.prototype.Add = function (request) {
            return this._service.call(request, 'Ams/Equipment/Add');
        };
        EquipmentService.prototype.All = function (request) {
            return this._service.call(request, 'Ams/Equipment/All');
        };
        EquipmentService.prototype.ById = function (request) {
            return this._service.call(request, 'Ams/Equipment/ById');
        };
        EquipmentService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/Equipment/ByIds');
        };
        EquipmentService.prototype.CustomDataFields = function (request) {
            return this._service.call(request, 'Ams/Equipment/CustomDataFields');
        };
        EquipmentService.prototype.Delete = function (request) {
            return this._service.call(request, 'Ams/Equipment/Delete');
        };
        EquipmentService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/Equipment/Search');
        };
        EquipmentService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/Equipment/Update');
        };
        return EquipmentService;
    }());
    exports.EquipmentService = EquipmentService;
});
