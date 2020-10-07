import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseChildObjectServiceTypes { 
    export namespace Requests {
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface GetList extends ServiceTypes.CoreRequestBase {
            FilterColumn?: string;
            FilterOperator?: string;
            FilterValue?: string;
            GroupBy?: string;
            HavingCondition?: string;
            PageNumber?: number;
            PageSize?: number;
            SingleRecordFlag?: boolean;
            SortColumn?: string;
            SortDirection?: string;
            WhereClause?: string;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaChildObjectId?: number;
            CaseNumber?: string;
            ChildCaseNumber?: string;
            ChildId?: number;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaChildObjectId?: number;
            CaseNumber?: string;
            ChildCaseNumber?: string;
            ChildId?: number;
        }
    }
    export namespace Responses {
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaChildObjectItemBase[]> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface GetList extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaChildObjectItemBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaChildObjectItemBase[]> {}
    }
    export interface ICaseChildObjectService {
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        GetList?: (request: Requests.GetList) => AbortablePromise<Responses.GetList>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}
