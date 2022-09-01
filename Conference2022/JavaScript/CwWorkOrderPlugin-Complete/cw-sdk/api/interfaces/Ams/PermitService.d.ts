import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace PermitServiceTypes { 
    export namespace Requests {
        export interface AddWorkOrderPermits extends ServiceTypes.CoreRequestBase {
            PermitSids: number[];
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
        export interface CreatePermit extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            DateExpires?: Date;
            DateIssued?: Date;
            Description?: string;
            IssuedBy?: string;
            PermitCost?: number;
            PermitNumber: string;
            PermitType?: string;
            RequestedBy?: string;
            Source?: string;
            Status?: string;
        }
        export interface DeletePermits extends ServiceTypes.CoreRequestBase {
            PermitSids: number[];
        }
        export interface DeleteWorkOrderPermits extends ServiceTypes.CoreRequestBase {
            PermitSids: number[];
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
        export interface Permits extends ServiceTypes.CoreRequestBase {
            ViewableOnly?: boolean;
        }
        export interface PermitTypes extends ServiceTypes.CoreRequestBase {
        }
        export interface UpdatePermit extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            DateExpires?: Date;
            DateIssued?: Date;
            Description?: string;
            IssuedBy?: string;
            PermitCost?: number;
            PermitNumber?: string;
            PermitSid: number;
            PermitType?: string;
            RequestedBy?: string;
            Source?: string;
            Status?: string;
        }
        export interface WorkOrderPermits extends ServiceTypes.CoreRequestBase {
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
    }
    export namespace Responses {
        export interface AddWorkOrderPermits extends ServiceTypes.CoreResponseBase_<CoreTypes.WOPermitBase[]> {}
        export interface CreatePermit extends ServiceTypes.CoreResponseBase_<CoreTypes.PermitBase> {}
        export interface DeletePermits extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface DeleteWorkOrderPermits extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Permits extends ServiceTypes.CoreResponseBase_<CoreTypes.PermitBase[]> {}
        export interface PermitTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.PermitType[]> {}
        export interface UpdatePermit extends ServiceTypes.CoreResponseBase_<CoreTypes.PermitBase> {}
        export interface WorkOrderPermits extends ServiceTypes.CoreResponseBase_<CoreTypes.WOPermitBase[]> {}
    }
    export interface IPermitService {
        AddWorkOrderPermits?: (request: Requests.AddWorkOrderPermits) => AbortablePromise<Responses.AddWorkOrderPermits>;
        CreatePermit?: (request: Requests.CreatePermit) => AbortablePromise<Responses.CreatePermit>;
        DeletePermits?: (request: Requests.DeletePermits) => AbortablePromise<Responses.DeletePermits>;
        DeleteWorkOrderPermits?: (request: Requests.DeleteWorkOrderPermits) => AbortablePromise<Responses.DeleteWorkOrderPermits>;
        Permits?: (request: Requests.Permits) => AbortablePromise<Responses.Permits>;
        PermitTypes?: (request: Requests.PermitTypes) => AbortablePromise<Responses.PermitTypes>;
        UpdatePermit?: (request: Requests.UpdatePermit) => AbortablePromise<Responses.UpdatePermit>;
        WorkOrderPermits?: (request: Requests.WorkOrderPermits) => AbortablePromise<Responses.WorkOrderPermits>;
    }
}
