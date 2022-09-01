import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ContractorPllServiceTypes { 
    export namespace Requests {
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            BusinessName?: string;
            ContractorId?: number;
        }
    }
    export namespace Responses {
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.ContractorItem[]> {}
    }
    export interface IContractorPllService {
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}
