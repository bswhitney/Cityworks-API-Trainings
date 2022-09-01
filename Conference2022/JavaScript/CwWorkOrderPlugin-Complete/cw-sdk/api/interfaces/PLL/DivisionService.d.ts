import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace DivisionServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            AddressLine3?: string;
            CityName?: string;
            CountryCode?: string;
            DepartmentId: number;
            DivisionCode?: string;
            DivisionName: string;
            ExpiredFlag?: string;
            FaxNumber?: string;
            PhoneNumber?: string;
            PhoneNumberExt?: string;
            StateCode?: string;
            ZipCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.DivisionItem> {}
    }
    export interface IDivisionService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
    }
}
