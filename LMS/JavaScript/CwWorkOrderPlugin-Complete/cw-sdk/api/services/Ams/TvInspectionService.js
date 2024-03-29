define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var TvInspectionService = /** @class */ (function () {
        function TvInspectionService(service) {
            this.ErrorCodes = {
                NotAuthorizedToUpdateInspection: 4,
                InvalidActivityMapLogicXY: 9,
                InvalidField: 30,
                ErrorItemNotFound: 35,
                MoveInvalidCityworksWkid: 68
            };
            this.WarningCodes = {};
            this._service = service;
        }
        TvInspectionService.prototype.AddObservation = function (request) {
            return this._service.call(request, 'Ams/TvInspection/AddObservation');
        };
        TvInspectionService.prototype.ById = function (request) {
            return this._service.call(request, 'Ams/TvInspection/ById');
        };
        TvInspectionService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/TvInspection/ByIds');
        };
        TvInspectionService.prototype.ByWorkOrder = function (request) {
            return this._service.call(request, 'Ams/TvInspection/ByWorkOrder');
        };
        TvInspectionService.prototype.CctvObservationCodeTypes = function (request) {
            return this._service.call(request, 'Ams/TvInspection/CctvObservationCodeTypes');
        };
        TvInspectionService.prototype.ChangeCustomFieldCategory = function (request) {
            return this._service.call(request, 'Ams/TvInspection/ChangeCustomFieldCategory');
        };
        TvInspectionService.prototype.CodeDescriptions = function (request) {
            return this._service.call(request, 'Ams/TvInspection/CodeDescriptions');
        };
        TvInspectionService.prototype.ConfirmDyeLeaks = function (request) {
            return this._service.call(request, 'Ams/TvInspection/ConfirmDyeLeaks');
        };
        TvInspectionService.prototype.ConfirmSmokeTests = function (request) {
            return this._service.call(request, 'Ams/TvInspection/ConfirmSmokeTests');
        };
        TvInspectionService.prototype.Create = function (request) {
            return this._service.call(request, 'Ams/TvInspection/Create');
        };
        TvInspectionService.prototype.CreateFromPacp = function (request) {
            return this._service.call(request, 'Ams/TvInspection/CreateFromPacp');
        };
        TvInspectionService.prototype.CreateSearchDefinition = function (request) {
            return this._service.call(request, 'Ams/TvInspection/CreateSearchDefinition');
        };
        TvInspectionService.prototype.DescriptionScores = function (request) {
            return this._service.call(request, 'Ams/TvInspection/DescriptionScores');
        };
        TvInspectionService.prototype.DownstreamNode = function (request) {
            return this._service.call(request, 'Ams/TvInspection/DownstreamNode');
        };
        TvInspectionService.prototype.EntityTypes = function (request) {
            return this._service.call(request, 'Ams/TvInspection/EntityTypes');
        };
        TvInspectionService.prototype.InspectedBy = function (request) {
            return this._service.call(request, 'Ams/TvInspection/InspectedBy');
        };
        TvInspectionService.prototype.Move = function (request) {
            return this._service.call(request, 'Ams/TvInspection/Move');
        };
        TvInspectionService.prototype.Observation = function (request) {
            return this._service.call(request, 'Ams/TvInspection/Observation');
        };
        TvInspectionService.prototype.ObservationCauseCodeDescriptions = function (request) {
            return this._service.call(request, 'Ams/TvInspection/ObservationCauseCodeDescriptions');
        };
        TvInspectionService.prototype.ObservationCodeTypes = function (request) {
            return this._service.call(request, 'Ams/TvInspection/ObservationCodeTypes');
        };
        TvInspectionService.prototype.Observations = function (request) {
            return this._service.call(request, 'Ams/TvInspection/Observations');
        };
        TvInspectionService.prototype.ReviewedBy = function (request) {
            return this._service.call(request, 'Ams/TvInspection/ReviewedBy');
        };
        TvInspectionService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/TvInspection/Search');
        };
        TvInspectionService.prototype.UnitsOfMeasure = function (request) {
            return this._service.call(request, 'Ams/TvInspection/UnitsOfMeasure');
        };
        TvInspectionService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/TvInspection/Update');
        };
        TvInspectionService.prototype.UpdateObservation = function (request) {
            return this._service.call(request, 'Ams/TvInspection/UpdateObservation');
        };
        TvInspectionService.prototype.UpstreamNode = function (request) {
            return this._service.call(request, 'Ams/TvInspection/UpstreamNode');
        };
        return TvInspectionService;
    }());
    exports.TvInspectionService = TvInspectionService;
});
