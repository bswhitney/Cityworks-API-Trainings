import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ExpirationTypeServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AfterDays?: number;
            AfterMonths?: number;
            AfterYear?: number;
            EomFlag?: string;
            ExpirationTypeCode?: string;
            ExpirationTypeDesc: string;
            ExpiredFlag?: string;
            OrgId: number;
            RenewalMargin?: number;
            SpecificMonthDay?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.ExpirationTypeItem> {}
    }
    export interface IExpirationTypeService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
    }
}
