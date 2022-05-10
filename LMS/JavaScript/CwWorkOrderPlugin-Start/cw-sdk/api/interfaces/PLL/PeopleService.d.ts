import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace PeopleServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            AddressLine3?: string;
            CityName?: string;
            CommentText?: string;
            CompanyName?: string;
            CountryCode?: string;
            Email?: string;
            ExpiredFlag?: string;
            FaxNumber?: string;
            Name: string;
            PhoneHome?: string;
            PhoneMobile?: string;
            PhoneNumber?: string;
            PhoneWork?: string;
            PhoneWorkExt?: string;
            RoleIds?: number[];
            StateCode?: string;
            TableName?: string;
            UserId?: number;
            WebSiteUrl?: string;
            ZipCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.PeopleItem> {}
    }
    export interface IPeopleService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
    }
}
