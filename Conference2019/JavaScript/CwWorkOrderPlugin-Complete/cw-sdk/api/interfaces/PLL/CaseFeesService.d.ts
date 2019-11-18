import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseFeesServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            Amount?: number;
            AutoRecalculate?: string;
            CaObjectId: number;
            CommentText?: string;
            Factor?: number;
            FeeSetupId: number;
            FeeTypeId?: number;
            Invoiced?: string;
            Quantity?: number;
            Rate?: number;
        }
        export interface AddDefault extends ServiceTypes.CoreRequestBase {
            BusCaseId: number;
            CaObjectId: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaFeeId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaFeeId?: number;
            CaObjectId?: number;
            FeeCode?: string;
            FeeDesc?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaFeesItemBase> {}
        export interface AddDefault extends ServiceTypes.CoreResponseBase_<CoreTypes.CaFeesItemBase[]> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CoreTypes.CaFeesItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFeesItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseFeesService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddDefault?: (request: Requests.AddDefault) => AbortablePromise<Responses.AddDefault>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
