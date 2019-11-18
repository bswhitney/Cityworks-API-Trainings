import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace AttachmentsServiceTypes { 
    export namespace Requests {
        export interface AddInspectionAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentType?: number;
            Comments?: string;
            Filename?: string;
            InspectionId: number;
        }
        export interface AddRequestAttachment extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Filename?: string;
            RequestId: number;
        }
        export interface AddWorkOrderAttachment extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Filename?: string;
            TaskId?: number;
            WorkOrderId: string;
        }
        export interface DeleteInspectionAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        export interface DeleteRequestAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        export interface DeleteWorkOrderAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        export interface DownloadInspectionAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface DownloadRequestAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface DownloadWorkOrderAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface InspectionAttachmentById extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface InspectionAttachments extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface RequestAttachmentById extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface RequestAttachments extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface WorkOrderAttachments extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
    }
    export namespace Responses {
        export interface AddInspectionAttachment extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.InspAttachment> {}
        export interface AddRequestAttachment extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.RequestAttachment> {}
        export interface AddWorkOrderAttachment extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOAttachment> {}
        export interface DeleteInspectionAttachments extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface DeleteRequestAttachments extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface DeleteWorkOrderAttachments extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface DownloadInspectionAttachment extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface DownloadRequestAttachment extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface DownloadWorkOrderAttachment extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface InspectionAttachmentById extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.InspAttachment> {}
        export interface InspectionAttachments extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.InspAttachment[]> {}
        export interface RequestAttachmentById extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.RequestAttachment> {}
        export interface RequestAttachments extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.RequestAttachment[]> {}
        export interface WorkOrderAttachments extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOAttachment[]> {}
    }
    export interface IAttachmentsService {
        AddInspectionAttachment?: (request: Requests.AddInspectionAttachment) => AbortablePromise<Responses.AddInspectionAttachment>;
        AddRequestAttachment?: (request: Requests.AddRequestAttachment) => AbortablePromise<Responses.AddRequestAttachment>;
        AddWorkOrderAttachment?: (request: Requests.AddWorkOrderAttachment) => AbortablePromise<Responses.AddWorkOrderAttachment>;
        DeleteInspectionAttachments?: (request: Requests.DeleteInspectionAttachments) => AbortablePromise<Responses.DeleteInspectionAttachments>;
        DeleteRequestAttachments?: (request: Requests.DeleteRequestAttachments) => AbortablePromise<Responses.DeleteRequestAttachments>;
        DeleteWorkOrderAttachments?: (request: Requests.DeleteWorkOrderAttachments) => AbortablePromise<Responses.DeleteWorkOrderAttachments>;
        DownloadInspectionAttachment?: (request: Requests.DownloadInspectionAttachment) => AbortablePromise<Responses.DownloadInspectionAttachment>;
        DownloadRequestAttachment?: (request: Requests.DownloadRequestAttachment) => AbortablePromise<Responses.DownloadRequestAttachment>;
        DownloadWorkOrderAttachment?: (request: Requests.DownloadWorkOrderAttachment) => AbortablePromise<Responses.DownloadWorkOrderAttachment>;
        InspectionAttachmentById?: (request: Requests.InspectionAttachmentById) => AbortablePromise<Responses.InspectionAttachmentById>;
        InspectionAttachments?: (request: Requests.InspectionAttachments) => AbortablePromise<Responses.InspectionAttachments>;
        RequestAttachmentById?: (request: Requests.RequestAttachmentById) => AbortablePromise<Responses.RequestAttachmentById>;
        RequestAttachments?: (request: Requests.RequestAttachments) => AbortablePromise<Responses.RequestAttachments>;
        WorkOrderAttachments?: (request: Requests.WorkOrderAttachments) => AbortablePromise<Responses.WorkOrderAttachments>;
    }
}
