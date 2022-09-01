import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace AttachmentsServiceTypes { 
    export namespace Requests {
        export interface AddActivityFileLink extends ServiceTypes.CoreRequestBase {
            ActivitySid: number;
            ActivityType: Enums.AttachmentType;
            AttachmentType?: Enums.AttachmentFileType;
            Comments?: string;
            Description?: string;
            Path: string;
            Title?: string;
        }
        export interface AddInspectionAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentType?: Enums.AttachmentFileType;
            Comments?: string;
            Filename?: string;
            InspectionId: number;
        }
        export interface AddRequestAttachment extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Filename?: string;
            RequestId: number;
        }
        export interface AddTvInspectionAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentType?: number;
            Comments?: string;
            Filename?: string;
            TvId: number;
        }
        export interface AddTvObservationAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentType?: Enums.AttachmentFileType;
            Comments?: string;
            Filename?: string;
            ObservationId: number;
        }
        export interface AddWorkOrderAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentType?: Enums.AttachmentFileType;
            Comments?: string;
            Filename?: string;
            TaskId?: number;
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        export interface DeleteInspectionAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        export interface DeleteRequestAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        export interface DeleteRequisitionAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
            StoreroomDomainId?: number;
        }
        export interface DeleteTvInspectionAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        export interface DeleteTvObservationAttachments extends ServiceTypes.CoreRequestBase {
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
        export interface DownloadTvInspectionAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface DownloadTvObservationAttachment extends ServiceTypes.CoreRequestBase {
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
        export interface TvInspectionAttachmentById extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface TvInspectionAttachments extends ServiceTypes.CoreRequestBase {
            TvIds: number[];
        }
        export interface TvObservationAttachmentById extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface TvObservationAttachments extends ServiceTypes.CoreRequestBase {
            ObservationIds: number[];
        }
        export interface WorkOrderAttachments extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
            WorkOrderSids: number[];
        }
    }
    export namespace Responses {
        export interface AddActivityFileLink extends ServiceTypes.CoreResponseBase_<CoreTypes.AttachmentExtendedBase> {}
        export interface AddInspectionAttachment extends ServiceTypes.CoreResponseBase_<CoreTypes.InspAttachment> {}
        export interface AddRequestAttachment extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestAttachment> {}
        export interface AddTvInspectionAttachment extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspAttachment> {}
        export interface AddTvObservationAttachment extends ServiceTypes.CoreResponseBase_<CoreTypes.TvObsvAttachment> {}
        export interface AddWorkOrderAttachment extends ServiceTypes.CoreResponseBase_<CoreTypes.WOAttachment> {}
        export interface DeleteInspectionAttachments extends ServiceTypes.CoreResponseBase {}
        export interface DeleteRequestAttachments extends ServiceTypes.CoreResponseBase {}
        export interface DeleteRequisitionAttachments extends ServiceTypes.CoreResponseBase {}
        export interface DeleteTvInspectionAttachments extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteTvObservationAttachments extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteWorkOrderAttachments extends ServiceTypes.CoreResponseBase {}
        export interface DownloadInspectionAttachment extends ServiceTypes.CoreResponseBase {}
        export interface DownloadRequestAttachment extends ServiceTypes.CoreResponseBase {}
        export interface DownloadTvInspectionAttachment extends ServiceTypes.CoreResponseBase {}
        export interface DownloadTvObservationAttachment extends ServiceTypes.CoreResponseBase {}
        export interface DownloadWorkOrderAttachment extends ServiceTypes.CoreResponseBase {}
        export interface InspectionAttachmentById extends ServiceTypes.CoreResponseBase_<CoreTypes.InspAttachment> {}
        export interface InspectionAttachments extends ServiceTypes.CoreResponseBase_<CoreTypes.InspAttachment[]> {}
        export interface RequestAttachmentById extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestAttachment> {}
        export interface RequestAttachments extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestAttachment[]> {}
        export interface TvInspectionAttachmentById extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspAttachment> {}
        export interface TvInspectionAttachments extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspAttachment[]> {}
        export interface TvObservationAttachmentById extends ServiceTypes.CoreResponseBase_<CoreTypes.TvObsvAttachment> {}
        export interface TvObservationAttachments extends ServiceTypes.CoreResponseBase_<CoreTypes.TvObsvAttachment[]> {}
        export interface WorkOrderAttachments extends ServiceTypes.CoreResponseBase_<CoreTypes.WOAttachment[]> {}
    }
    export interface IAttachmentsService {
        AddActivityFileLink?: (request: Requests.AddActivityFileLink) => AbortablePromise<Responses.AddActivityFileLink>;
        AddInspectionAttachment?: (request: Requests.AddInspectionAttachment) => AbortablePromise<Responses.AddInspectionAttachment>;
        AddRequestAttachment?: (request: Requests.AddRequestAttachment) => AbortablePromise<Responses.AddRequestAttachment>;
        AddTvInspectionAttachment?: (request: Requests.AddTvInspectionAttachment) => AbortablePromise<Responses.AddTvInspectionAttachment>;
        AddTvObservationAttachment?: (request: Requests.AddTvObservationAttachment) => AbortablePromise<Responses.AddTvObservationAttachment>;
        AddWorkOrderAttachment?: (request: Requests.AddWorkOrderAttachment) => AbortablePromise<Responses.AddWorkOrderAttachment>;
        DeleteInspectionAttachments?: (request: Requests.DeleteInspectionAttachments) => AbortablePromise<Responses.DeleteInspectionAttachments>;
        DeleteRequestAttachments?: (request: Requests.DeleteRequestAttachments) => AbortablePromise<Responses.DeleteRequestAttachments>;
        DeleteRequisitionAttachments?: (request: Requests.DeleteRequisitionAttachments) => AbortablePromise<Responses.DeleteRequisitionAttachments>;
        DeleteTvInspectionAttachments?: (request: Requests.DeleteTvInspectionAttachments) => AbortablePromise<Responses.DeleteTvInspectionAttachments>;
        DeleteTvObservationAttachments?: (request: Requests.DeleteTvObservationAttachments) => AbortablePromise<Responses.DeleteTvObservationAttachments>;
        DeleteWorkOrderAttachments?: (request: Requests.DeleteWorkOrderAttachments) => AbortablePromise<Responses.DeleteWorkOrderAttachments>;
        DownloadInspectionAttachment?: (request: Requests.DownloadInspectionAttachment) => AbortablePromise<Responses.DownloadInspectionAttachment>;
        DownloadRequestAttachment?: (request: Requests.DownloadRequestAttachment) => AbortablePromise<Responses.DownloadRequestAttachment>;
        DownloadTvInspectionAttachment?: (request: Requests.DownloadTvInspectionAttachment) => AbortablePromise<Responses.DownloadTvInspectionAttachment>;
        DownloadTvObservationAttachment?: (request: Requests.DownloadTvObservationAttachment) => AbortablePromise<Responses.DownloadTvObservationAttachment>;
        DownloadWorkOrderAttachment?: (request: Requests.DownloadWorkOrderAttachment) => AbortablePromise<Responses.DownloadWorkOrderAttachment>;
        InspectionAttachmentById?: (request: Requests.InspectionAttachmentById) => AbortablePromise<Responses.InspectionAttachmentById>;
        InspectionAttachments?: (request: Requests.InspectionAttachments) => AbortablePromise<Responses.InspectionAttachments>;
        RequestAttachmentById?: (request: Requests.RequestAttachmentById) => AbortablePromise<Responses.RequestAttachmentById>;
        RequestAttachments?: (request: Requests.RequestAttachments) => AbortablePromise<Responses.RequestAttachments>;
        TvInspectionAttachmentById?: (request: Requests.TvInspectionAttachmentById) => AbortablePromise<Responses.TvInspectionAttachmentById>;
        TvInspectionAttachments?: (request: Requests.TvInspectionAttachments) => AbortablePromise<Responses.TvInspectionAttachments>;
        TvObservationAttachmentById?: (request: Requests.TvObservationAttachmentById) => AbortablePromise<Responses.TvObservationAttachmentById>;
        TvObservationAttachments?: (request: Requests.TvObservationAttachments) => AbortablePromise<Responses.TvObservationAttachments>;
        WorkOrderAttachments?: (request: Requests.WorkOrderAttachments) => AbortablePromise<Responses.WorkOrderAttachments>;
    }
}
