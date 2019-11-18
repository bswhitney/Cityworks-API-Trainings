import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseFeesDataDetailServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaDataDetailId: number;
            CaFeeId: number;
            Sequence: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaFeesDataDetailId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaFeeId?: number;
            CaFeesDataDetailId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFeesDataDetailItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFeesDataDetailItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseFeesDataDetailService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
