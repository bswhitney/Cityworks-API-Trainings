import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace QueryServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            IncludeQuery?: boolean;
            QueryIds?: number[];
        }
        export interface Query extends ServiceTypes.CoreRequestBase {
            Page?: number;
            PageSize?: number;
            QueryValue: string;
            ResponseFields?: CoreTypes.DynamicResponseDefinition;
            SortDescending?: boolean;
            SortField?: string;
            Variables?: CoreTypes.DynamicVariableMap;
        }
        export interface QuerySchema extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            QueryType: string;
        }
        export interface QueryTypeInformation extends ServiceTypes.CoreRequestBase {
            IncludeDefaultSchemas?: boolean;
            IncludeGisSchemas?: boolean;
        }
        export interface QueryTypes extends ServiceTypes.CoreRequestBase {
        }
        export interface RunById extends ServiceTypes.CoreRequestBase {
            Page?: number;
            PageSize?: number;
            QueryId: number;
            QueryValue?: string;
            ResponseFields?: CoreTypes.DynamicResponseDefinition;
            SortDescending?: boolean;
            SortField?: string;
            Variables?: CoreTypes.DynamicVariableMap;
        }
        export interface SavedQueries extends ServiceTypes.CoreRequestBase {
            CreatedOnly?: boolean;
            IncludeQuery?: boolean;
            QueryType?: string;
            QueryTypes?: string[];
        }
        export interface SearchToQuery extends ServiceTypes.CoreRequestBase {
            AllowEmptyQuery?: boolean;
            AllowMultipleBooleanValues?: boolean;
            SaveQuery?: boolean;
            SearchIds: number[];
        }
        export interface ValidateQuery extends ServiceTypes.CoreRequestBase {
            Query?: string;
            Variables?: CoreTypes.DynamicVariableMap;
        }
        export interface ValidateResponseDefinition extends ServiceTypes.CoreRequestBase {
            QueryType: string;
            ResponseDefinition: CoreTypes.DynamicResponseDefinition;
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.SavedQuery[]> {}
        export interface Query extends ServiceTypes.CoreResponseBase_<CoreTypes.QueryResult> {}
        export interface QuerySchema extends ServiceTypes.CoreResponseBase_<CoreTypes.ISchema> {}
        export interface QueryTypeInformation extends ServiceTypes.CoreResponseBase_<CoreTypes.QueryTypeInfo[]> {}
        export interface QueryTypes extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface RunById extends ServiceTypes.CoreResponseBase_<CoreTypes.QueryResult> {}
        export interface SavedQueries extends ServiceTypes.CoreResponseBase_<CoreTypes.SavedQuery[]> {}
        export interface SearchToQuery extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.SavedQuery}> {}
        export interface ValidateQuery extends ServiceTypes.CoreResponseBase_<CoreTypes.Error[]> {}
        export interface ValidateResponseDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.Error[]> {}
    }
    export interface IQueryService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Query?: (request: Requests.Query) => AbortablePromise<Responses.Query>;
        QuerySchema?: (request: Requests.QuerySchema) => AbortablePromise<Responses.QuerySchema>;
        QueryTypeInformation?: (request: Requests.QueryTypeInformation) => AbortablePromise<Responses.QueryTypeInformation>;
        QueryTypes?: (request: Requests.QueryTypes) => AbortablePromise<Responses.QueryTypes>;
        RunById?: (request: Requests.RunById) => AbortablePromise<Responses.RunById>;
        SavedQueries?: (request: Requests.SavedQueries) => AbortablePromise<Responses.SavedQueries>;
        SearchToQuery?: (request: Requests.SearchToQuery) => AbortablePromise<Responses.SearchToQuery>;
        ValidateQuery?: (request: Requests.ValidateQuery) => AbortablePromise<Responses.ValidateQuery>;
        ValidateResponseDefinition?: (request: Requests.ValidateResponseDefinition) => AbortablePromise<Responses.ValidateResponseDefinition>;
    }
}
