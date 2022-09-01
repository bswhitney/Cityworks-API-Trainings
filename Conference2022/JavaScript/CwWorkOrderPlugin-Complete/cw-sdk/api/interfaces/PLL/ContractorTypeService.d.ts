import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ContractorTypeServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            ContractorDesc?: string;
            ContractorType?: string;
            ContractorTypeId?: number;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            ContractorDesc?: string;
            ContractorType?: string;
            ContractorTypeId?: number;
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.ContractorTypeItem[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.ContractorTypeItem[]> {}
    }
    export interface IContractorTypeService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}
