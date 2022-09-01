import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseDataGroupServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CaseDataGroupId: number;
            GroupCode: string;
            GroupDesc?: string;
            GroupSum?: number;
            SumFlag?: string;
        }
        export interface AddDefault extends ServiceTypes.CoreRequestBase {
            BusCaseId: number;
            CaObjectId: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface CheckGISChanges extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
            CaseDataDetailId?: number;
            CaseDataGroupId?: number;
            EntityType: string;
            EntityUid: string;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDataGroupId?: number;
            CaseDataGroupId?: number;
            GroupCode?: string;
            GroupDesc?: string;
            GroupSum?: number;
            SumFlag?: string;
        }
        export interface UpdateFromAsset extends ServiceTypes.CoreRequestBase {
            CaDataGroupId?: number;
            CaObjectId: number;
            EntityType: string;
            EntityUid: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDataGroupItemBase> {}
        export interface AddDefault extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDataGroupItemBase[]> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaDataGroupItemBase[]> {}
        export interface CheckGISChanges extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDataDetailChanges[]> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface UpdateFromAsset extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDataGroupItem[]> {}
    }
    export interface ICaseDataGroupService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddDefault?: (request: Requests.AddDefault) => AbortablePromise<Responses.AddDefault>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        CheckGISChanges?: (request: Requests.CheckGISChanges) => AbortablePromise<Responses.CheckGISChanges>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        UpdateFromAsset?: (request: Requests.UpdateFromAsset) => AbortablePromise<Responses.UpdateFromAsset>;
    }
}
