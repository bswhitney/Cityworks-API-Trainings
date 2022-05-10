import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseStatusServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaseStatus: string;
            ExpiredFlag?: string;
            StatusCode: string;
            StatusDesc?: string;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaseStatusId?: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaseStatusId?: number;
            StatusCode?: string;
            StatusDesc?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaseStatusId?: number;
            StatusCode?: string;
            StatusDesc?: string;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CaseStatus: string;
            CaseStatusId?: number;
            ExpiredFlag?: string;
            StatusCode?: string;
            StatusDesc?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaseStatusItem> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<CoreTypes.CaseStatusItem> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_<CoreTypes.CaseStatusItem[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CaseStatusItem> {}
    }
    export interface ICaseStatusService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
