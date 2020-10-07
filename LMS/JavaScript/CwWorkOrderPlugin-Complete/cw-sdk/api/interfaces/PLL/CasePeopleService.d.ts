import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CasePeopleServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            AddressLine3?: string;
            AddToPeople?: boolean;
            CaObjectId: number;
            City?: string;
            CommentText?: string;
            Company?: string;
            CountryCode?: string;
            Email?: string;
            FaxNumber?: string;
            Name: string;
            PeopleId?: number;
            PhoneHome?: string;
            PhoneMobile?: string;
            PhoneWork?: string;
            PhoneWorkExt?: string;
            RoleId?: number;
            StateCode?: string;
            WebSiteUrl?: string;
            ZipCode?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaPeopleId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            CaObjectId?: number;
            CaPeopleId?: number;
            CityName?: string;
            CountryCode?: string;
            CountryName?: string;
            Email?: string;
            Name?: string;
            PhoneHome?: string;
            PhoneMobile?: string;
            PhoneWork?: string;
            RoleCode?: string;
            RoleDesc?: string;
            RoleId?: number;
            StateCode?: string;
            StateName?: string;
            ZipCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaPeopleItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CoreTypes.CaPeopleItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<CoreTypes.CaPeopleItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
    }
    export interface ICasePeopleService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
