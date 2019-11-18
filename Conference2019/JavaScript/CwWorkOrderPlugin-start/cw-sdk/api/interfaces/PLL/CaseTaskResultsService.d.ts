import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseTaskResultsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CaseStatus?: string;
            CaseStatusId?: number;
            CaTaskId: number;
            CloseTaskFlag?: string;
            ExtendExpirationDateFlag?: string;
            InsertFlag?: string;
            NextTaskFlag?: string;
            ReInsertFlag?: string;
            ResultCode: string;
            ResultDesc?: string;
            ResultDisplay?: string;
            ResultID: number;
            ResultSetID: number;
            SkipTaskFlag?: string;
            StatusCode?: string;
        }
        export interface ByCaTaskIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
            CaseStatus?: string;
            CaseStatusId?: number;
            CaTaskId?: number;
            CaTaskResultsId?: number;
            CloseTaskFlag?: string;
            ExtendExpirationDateFlag?: string;
            InsertFlag?: string;
            NextTaskFlag?: string;
            ReInsertFlag?: string;
            ResultCode?: string;
            ResultDesc?: string;
            ResultDisplay?: string;
            ResultID?: number;
            ResultSetID?: number;
            SkipTaskFlag?: string;
            StatusCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskResultsItem> {}
        export interface ByCaTaskIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaTaskResultsItem[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaTaskResultsItem[]> {}
    }
    export interface ICaseTaskResultsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaTaskIds?: (request: Requests.ByCaTaskIds) => AbortablePromise<Responses.ByCaTaskIds>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}
