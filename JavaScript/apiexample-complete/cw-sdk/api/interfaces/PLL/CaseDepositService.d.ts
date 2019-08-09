import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseDepositServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            Amount?: number;
            CaObjectId: number;
            CommentText?: string;
            DepositId: number;
        }
        export interface AddDefault extends ServiceTypes.CoreRequestBase {
            BusCaseId: number;
            CaObjectId: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaDepositId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDepositId?: number;
            CaObjectId?: number;
            DepositCode?: string;
            DepositDesc?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDepositItemBase> {}
        export interface AddDefault extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDepositItemBase[]> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDepositItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDepositItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
    }
    export interface ICaseDepositService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddDefault?: (request: Requests.AddDefault) => AbortablePromise<Responses.AddDefault>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
