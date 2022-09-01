define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var ManholeInspectionService = /** @class */ (function () {
        function ManholeInspectionService(service) {
            this.ErrorCodes = {
                UnknownError: 1,
                NotAuthorizedToUpdateInspection: 4,
                InvalidActivityMapLogicXY: 9,
                InvalidField: 30,
                ErrorItemNotFound: 35,
                MoveInvalidCityworksWkid: 68
            };
            this.WarningCodes = {
                WarningItemNotFound: 60,
                WarningEmptyOrNullField: 61
            };
            this._service = service;
        }
        ManholeInspectionService.prototype.AddImage = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/AddImage');
        };
        ManholeInspectionService.prototype.AddObservation = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/AddObservation');
        };
        ManholeInspectionService.prototype.AddPipeObservation = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/AddPipeObservation');
        };
        ManholeInspectionService.prototype.ByEntityTypeIds = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/ByEntityTypeIds');
        };
        ManholeInspectionService.prototype.ById = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/ById');
        };
        ManholeInspectionService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/ByIds');
        };
        ManholeInspectionService.prototype.ByWorkOrderIds = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/ByWorkOrderIds');
        };
        ManholeInspectionService.prototype.ByWorkOrders = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/ByWorkOrders');
        };
        ManholeInspectionService.prototype.ChangeCustomFieldCategory = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/ChangeCustomFieldCategory');
        };
        ManholeInspectionService.prototype.CloneInspection = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/CloneInspection');
        };
        ManholeInspectionService.prototype.Create = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/Create');
        };
        ManholeInspectionService.prototype.EntityTypes = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/EntityTypes');
        };
        ManholeInspectionService.prototype.Images = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/Images');
        };
        ManholeInspectionService.prototype.InspectedBy = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/InspectedBy');
        };
        ManholeInspectionService.prototype.Move = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/Move');
        };
        ManholeInspectionService.prototype.Observations = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/Observations');
        };
        ManholeInspectionService.prototype.ObservationsByIds = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/ObservationsByIds');
        };
        ManholeInspectionService.prototype.PipeObservations = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/PipeObservations');
        };
        ManholeInspectionService.prototype.PipeObservationsByIds = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/PipeObservationsByIds');
        };
        ManholeInspectionService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/Update');
        };
        ManholeInspectionService.prototype.UpdateObservation = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/UpdateObservation');
        };
        ManholeInspectionService.prototype.UpdatePipeObservation = function (request) {
            return this._service.call(request, 'Ams/ManholeInspection/UpdatePipeObservation');
        };
        return ManholeInspectionService;
    }());
    exports.ManholeInspectionService = ManholeInspectionService;
});
