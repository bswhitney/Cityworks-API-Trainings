import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseConditionServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AppliedBy?: number;
            CaObjectId: number;
            CompletedBy?: number;
            ConditionId: number;
            DateApplied?: Date;
            DateCompleted?: Date;
            DefaultText?: string;
            DisciplineId?: number;
            Notes?: string;
            PrePostExistFlag?: string;
            TaskId?: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaConditionId?: number;
            CaObjectId?: number;
            ConditionCode?: string;
            ConditionDesc?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaConditionId?: number;
            CaObjectId?: number;
            ConditionCode?: string;
            ConditionDesc?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaConditionItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaConditionItemBase[]> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaConditionItemBase[]> {}
    }
    export interface ICaseConditionService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}
