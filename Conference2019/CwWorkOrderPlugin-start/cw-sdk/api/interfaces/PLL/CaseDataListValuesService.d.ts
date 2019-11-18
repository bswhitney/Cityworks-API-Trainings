import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseDataListValuesServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaDataDetailId: number;
            ListValue: string;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaDataListId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataListId?: number;
            ListValue?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataListId?: number;
            ListValue?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaDataListValuesItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaDataListValuesItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaDataListValuesItemBase[]> {}
    }
    export interface ICaseDataListValuesService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}
