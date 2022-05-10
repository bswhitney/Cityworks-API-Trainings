define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var AttachmentsService = /** @class */ (function () {
        function AttachmentsService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        AttachmentsService.prototype.AddActivityFileLink = function (request) {
            return this._service.call(request, 'Ams/Attachments/AddActivityFileLink');
        };
        AttachmentsService.prototype.AddInspectionAttachment = function (request) {
            return this._service.call(request, 'Ams/Attachments/AddInspectionAttachment');
        };
        AttachmentsService.prototype.AddRequestAttachment = function (request) {
            return this._service.call(request, 'Ams/Attachments/AddRequestAttachment');
        };
        AttachmentsService.prototype.AddTvInspectionAttachment = function (request) {
            return this._service.call(request, 'Ams/Attachments/AddTvInspectionAttachment');
        };
        AttachmentsService.prototype.AddTvObservationAttachment = function (request) {
            return this._service.call(request, 'Ams/Attachments/AddTvObservationAttachment');
        };
        AttachmentsService.prototype.AddWorkOrderAttachment = function (request) {
            return this._service.call(request, 'Ams/Attachments/AddWorkOrderAttachment');
        };
        AttachmentsService.prototype.DeleteInspectionAttachments = function (request) {
            return this._service.call(request, 'Ams/Attachments/DeleteInspectionAttachments');
        };
        AttachmentsService.prototype.DeleteRequestAttachments = function (request) {
            return this._service.call(request, 'Ams/Attachments/DeleteRequestAttachments');
        };
        AttachmentsService.prototype.DeleteRequisitionAttachments = function (request) {
            return this._service.call(request, 'Ams/Attachments/DeleteRequisitionAttachments');
        };
        AttachmentsService.prototype.DeleteTvInspectionAttachments = function (request) {
            return this._service.call(request, 'Ams/Attachments/DeleteTvInspectionAttachments');
        };
        AttachmentsService.prototype.DeleteTvObservationAttachments = function (request) {
            return this._service.call(request, 'Ams/Attachments/DeleteTvObservationAttachments');
        };
        AttachmentsService.prototype.DeleteWorkOrderAttachments = function (request) {
            return this._service.call(request, 'Ams/Attachments/DeleteWorkOrderAttachments');
        };
        AttachmentsService.prototype.DownloadInspectionAttachment = function (request) {
            return this._service.call(request, 'Ams/Attachments/DownloadInspectionAttachment');
        };
        AttachmentsService.prototype.DownloadRequestAttachment = function (request) {
            return this._service.call(request, 'Ams/Attachments/DownloadRequestAttachment');
        };
        AttachmentsService.prototype.DownloadTvInspectionAttachment = function (request) {
            return this._service.call(request, 'Ams/Attachments/DownloadTvInspectionAttachment');
        };
        AttachmentsService.prototype.DownloadTvObservationAttachment = function (request) {
            return this._service.call(request, 'Ams/Attachments/DownloadTvObservationAttachment');
        };
        AttachmentsService.prototype.DownloadWorkOrderAttachment = function (request) {
            return this._service.call(request, 'Ams/Attachments/DownloadWorkOrderAttachment');
        };
        AttachmentsService.prototype.InspectionAttachmentById = function (request) {
            return this._service.call(request, 'Ams/Attachments/InspectionAttachmentById');
        };
        AttachmentsService.prototype.InspectionAttachments = function (request) {
            return this._service.call(request, 'Ams/Attachments/InspectionAttachments');
        };
        AttachmentsService.prototype.RequestAttachmentById = function (request) {
            return this._service.call(request, 'Ams/Attachments/RequestAttachmentById');
        };
        AttachmentsService.prototype.RequestAttachments = function (request) {
            return this._service.call(request, 'Ams/Attachments/RequestAttachments');
        };
        AttachmentsService.prototype.TvInspectionAttachmentById = function (request) {
            return this._service.call(request, 'Ams/Attachments/TvInspectionAttachmentById');
        };
        AttachmentsService.prototype.TvInspectionAttachments = function (request) {
            return this._service.call(request, 'Ams/Attachments/TvInspectionAttachments');
        };
        AttachmentsService.prototype.TvObservationAttachmentById = function (request) {
            return this._service.call(request, 'Ams/Attachments/TvObservationAttachmentById');
        };
        AttachmentsService.prototype.TvObservationAttachments = function (request) {
            return this._service.call(request, 'Ams/Attachments/TvObservationAttachments');
        };
        AttachmentsService.prototype.WorkOrderAttachments = function (request) {
            return this._service.call(request, 'Ams/Attachments/WorkOrderAttachments');
        };
        return AttachmentsService;
    }());
    exports.AttachmentsService = AttachmentsService;
});
