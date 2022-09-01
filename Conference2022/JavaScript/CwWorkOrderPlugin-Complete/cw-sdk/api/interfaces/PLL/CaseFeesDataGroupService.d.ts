import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseFeesDataGroupServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaDataGroupId: number;
            CaFeeId: number;
            Sequence: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaFeesDataGroupId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDataGroupId?: number;
            CaFeeId?: number;
            CaFeesDataGroupId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFeesDataGroupItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFeesDataGroupItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseFeesDataGroupService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
