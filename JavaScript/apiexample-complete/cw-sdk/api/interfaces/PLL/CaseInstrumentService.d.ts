import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseInstrumentServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            Amount: number;
            CaObjectId: number;
            CityName?: string;
            CommentText?: string;
            Company?: string;
            ContactEmail?: string;
            ContactName?: string;
            ContactPhone?: string;
            CountryCode?: string;
            DateExpire: Date;
            EffectiveDate?: Date;
            InstTypeId: number;
            IssueDate?: Date;
            SerialNumber?: string;
            StateCode?: string;
            ZipCode?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaInstrumentId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
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
            AddressLine1?: string;
            Amount?: number;
            CaInstrumentId?: number;
            CityName?: string;
            CommentText?: string;
            Company?: string;
            ContactEmail?: string;
            ContactName?: string;
            ContactPhone?: string;
            CountryCode?: string;
            InstTypeId?: number;
            SerialNumber?: string;
            StateCode?: string;
            ZipCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstrumentItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstrumentItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstrumentItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface GetList extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstrumentItem[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseInstrumentService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        GetList?: (request: Requests.GetList) => AbortablePromise<Responses.GetList>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
