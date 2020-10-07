import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace QuickSearchServiceTypes { 
    export namespace Requests {
        export interface QuickSearch extends ServiceTypes.CoreRequestBase {
            QuickSearchText?: string;
        }
    }
    export namespace Responses {
        export interface QuickSearch extends ServiceTypes.CoreResponseBase_<CoreTypes.QuickSearchResult> {}
    }
    export interface IQuickSearchService {
        QuickSearch?: (request: Requests.QuickSearch) => AbortablePromise<Responses.QuickSearch>;
    }
}
