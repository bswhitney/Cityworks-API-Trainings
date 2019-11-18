import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { AttachmentsServiceTypes as SvcDef } from '../../interfaces/Ams/AttachmentsService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IAttachmentsService = SvcDef.IAttachmentsService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/AttachmentsService';
export declare class AttachmentsService implements IAttachmentsService {
    private _service;
    constructor(service: IApiService);
    AddInspectionAttachment(request: Requests.AddInspectionAttachment): AbortablePromise<Responses.AddInspectionAttachment>;
    AddRequestAttachment(request: Requests.AddRequestAttachment): AbortablePromise<Responses.AddRequestAttachment>;
    AddWorkOrderAttachment(request: Requests.AddWorkOrderAttachment): AbortablePromise<Responses.AddWorkOrderAttachment>;
    DeleteInspectionAttachments(request: Requests.DeleteInspectionAttachments): AbortablePromise<Responses.DeleteInspectionAttachments>;
    DeleteRequestAttachments(request: Requests.DeleteRequestAttachments): AbortablePromise<Responses.DeleteRequestAttachments>;
    DeleteWorkOrderAttachments(request: Requests.DeleteWorkOrderAttachments): AbortablePromise<Responses.DeleteWorkOrderAttachments>;
    DownloadInspectionAttachment(request: Requests.DownloadInspectionAttachment): AbortablePromise<Responses.DownloadInspectionAttachment>;
    DownloadRequestAttachment(request: Requests.DownloadRequestAttachment): AbortablePromise<Responses.DownloadRequestAttachment>;
    DownloadWorkOrderAttachment(request: Requests.DownloadWorkOrderAttachment): AbortablePromise<Responses.DownloadWorkOrderAttachment>;
    InspectionAttachmentById(request: Requests.InspectionAttachmentById): AbortablePromise<Responses.InspectionAttachmentById>;
    InspectionAttachments(request: Requests.InspectionAttachments): AbortablePromise<Responses.InspectionAttachments>;
    RequestAttachmentById(request: Requests.RequestAttachmentById): AbortablePromise<Responses.RequestAttachmentById>;
    RequestAttachments(request: Requests.RequestAttachments): AbortablePromise<Responses.RequestAttachments>;
    WorkOrderAttachments(request: Requests.WorkOrderAttachments): AbortablePromise<Responses.WorkOrderAttachments>;
}
