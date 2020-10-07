import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseCorrectionsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CaTaskId: number;
            CorrId: number;
        }
        export interface ByCaTaskIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId?: number;
            CaTaskId?: number;
            CommentText?: string;
            CompletedBy?: number;
            CorrId?: number;
            RecheckFlag?: string;
            RecheckHistoryFlag?: string;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId: number;
            CommentText?: string;
            CompletedBy?: number;
            CorrStatusId?: number;
            DateCompleted?: Date;
            RecheckCaCorrId?: number;
            RecheckFlag?: string;
            RecheckHistoryFlag?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaCorrectionsItemBase> {}
        export interface ByCaTaskIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaCorrectionsItemBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CaCorrectionsItemBase> {}
    }
    export interface ICaseCorrectionsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaTaskIds?: (request: Requests.ByCaTaskIds) => AbortablePromise<Responses.ByCaTaskIds>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
