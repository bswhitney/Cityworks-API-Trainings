import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace TasksServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            ActualFinishDate?: Date;
            ActualStartDate?: Date;
            AssignedTo?: number;
            Comments?: string;
            Entities?: CoreTypes.WorkOrderEntity[];
            PermitSid?: number;
            ProceedOk?: boolean;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Resequence?: boolean;
            Rework?: boolean;
            SequenceId?: number;
            Shop?: string;
            Status?: string;
            TaskCode?: string;
            TaskSids?: number[];
            WorkOrderId: string;
            WOTempTaskIds?: number[];
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            WOTaskId: number;
        }
        export interface ByWorkOrder extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface ByWorkOrderTemplate extends ServiceTypes.CoreRequestBase {
            WOTemplateId: string;
            WOTemplateIds?: string[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            WOTaskIds: number[];
        }
        export interface Keywords extends ServiceTypes.CoreRequestBase {
            TaskSids: number[];
        }
        export interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        export interface TaskCodes extends ServiceTypes.CoreRequestBase {
            TaskSid: number;
        }
        export interface TaskNodes extends ServiceTypes.CoreRequestBase {
            DisplayTextDelimeter?: string;
            DisplayTextMode?: string;
            DomainId: number;
            IncludeCancelled?: boolean;
        }
        export interface Template extends ServiceTypes.CoreRequestBase {
            TaskSid: number;
        }
        export interface Templates extends ServiceTypes.CoreRequestBase {
            Keyword?: string;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ActualFinishDate?: Date;
            ActualStartDate?: Date;
            AssignedTo?: number;
            Comments?: string;
            Effort?: number;
            EntityType?: string;
            EntityUid?: string;
            PermitSid?: number;
            ProceedOk?: boolean;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Resequence?: boolean;
            Rework?: boolean;
            SequenceId?: number;
            Shop?: string;
            Status?: string;
            TaskCode?: string;
            WOTaskId: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOTask[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOTask> {}
        export interface ByWorkOrder extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOTask[]> {}
        export interface ByWorkOrderTemplate extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOTempTask[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface Keywords extends ServiceTypes.CoreResponseBase_<CoreTypes.TaskKeyword[]> {}
        export interface Statuses extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CodeDesc[]> {}
        export interface TaskCodes extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.TaskCode[]> {}
        export interface TaskNodes extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.TaskNode[]> {}
        export interface Template extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.TaskLeafBase> {}
        export interface Templates extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.TaskLeafBase[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOTask> {}
    }
    export interface ITasksService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByWorkOrder?: (request: Requests.ByWorkOrder) => AbortablePromise<Responses.ByWorkOrder>;
        ByWorkOrderTemplate?: (request: Requests.ByWorkOrderTemplate) => AbortablePromise<Responses.ByWorkOrderTemplate>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Keywords?: (request: Requests.Keywords) => AbortablePromise<Responses.Keywords>;
        Statuses?: (request: Requests.Statuses) => AbortablePromise<Responses.Statuses>;
        TaskCodes?: (request: Requests.TaskCodes) => AbortablePromise<Responses.TaskCodes>;
        TaskNodes?: (request: Requests.TaskNodes) => AbortablePromise<Responses.TaskNodes>;
        Template?: (request: Requests.Template) => AbortablePromise<Responses.Template>;
        Templates?: (request: Requests.Templates) => AbortablePromise<Responses.Templates>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
