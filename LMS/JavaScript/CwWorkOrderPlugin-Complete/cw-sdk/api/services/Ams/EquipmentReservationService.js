define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var EquipmentReservationService = /** @class */ (function () {
        function EquipmentReservationService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        EquipmentReservationService.prototype.CheckedOut = function (request) {
            return this._service.call(request, 'Ams/EquipmentReservation/CheckedOut');
        };
        EquipmentReservationService.prototype.CheckIn = function (request) {
            return this._service.call(request, 'Ams/EquipmentReservation/CheckIn');
        };
        EquipmentReservationService.prototype.CheckOut = function (request) {
            return this._service.call(request, 'Ams/EquipmentReservation/CheckOut');
        };
        EquipmentReservationService.prototype.CheckOutHistory = function (request) {
            return this._service.call(request, 'Ams/EquipmentReservation/CheckOutHistory');
        };
        EquipmentReservationService.prototype.DeleteReservation = function (request) {
            return this._service.call(request, 'Ams/EquipmentReservation/DeleteReservation');
        };
        EquipmentReservationService.prototype.Reservations = function (request) {
            return this._service.call(request, 'Ams/EquipmentReservation/Reservations');
        };
        EquipmentReservationService.prototype.Reserve = function (request) {
            return this._service.call(request, 'Ams/EquipmentReservation/Reserve');
        };
        EquipmentReservationService.prototype.Status = function (request) {
            return this._service.call(request, 'Ams/EquipmentReservation/Status');
        };
        EquipmentReservationService.prototype.UpdateReservation = function (request) {
            return this._service.call(request, 'Ams/EquipmentReservation/UpdateReservation');
        };
        return EquipmentReservationService;
    }());
    exports.EquipmentReservationService = EquipmentReservationService;
});
