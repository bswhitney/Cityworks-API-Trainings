import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseViolationsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaFeeId?: number;
            CaObjectId: number;
            CaTaskId?: number;
            CompletedBy?: number;
            DateCompleted?: Date;
            DateIssued: Date;
            Issuedby?: number;
            RemedialText?: string;
            ViolationId: number;
            ViolationText?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface CompleteViolations extends ServiceTypes.CoreRequestBase {
            CaViolationId: number;
            CompletedBy?: number;
            DateCompleted?: Date;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaViolationId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaTaskId?: number;
            CaViolationId?: number;
            RemedialText?: string;
            TaskCode?: string;
            TaskDesc?: string;
            ViolationDesc?: string;
            ViolationText?: string;
            ViolationType?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaViolationsItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaViolationsItemBase[]> {}
        export interface CompleteViolations extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaViolationsItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaViolationsItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseViolationsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        CompleteViolations?: (request: Requests.CompleteViolations) => AbortablePromise<Responses.CompleteViolations>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
