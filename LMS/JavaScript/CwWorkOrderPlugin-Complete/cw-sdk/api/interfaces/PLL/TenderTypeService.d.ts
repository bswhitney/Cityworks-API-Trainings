import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace TenderTypeServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AccountCode?: string;
            AnonymousFlag?: string;
            ExpiredFlag?: string;
            OrgId?: number;
            OverPaymentFlag?: string;
            PaymentGatewayFlag?: string;
            PaymentGatewayId?: number;
            RegisteredFlag?: string;
            TableName?: string;
            TenderDesc?: string;
            TenderType?: string;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AccountCode?: string;
            AnonymousFlag?: string;
            ExpiredFlag?: string;
            OrgId?: number;
            OverPaymentFlag?: string;
            PaymentGatewayFlag?: string;
            PaymentGatewayId?: number;
            RegisteredFlag?: string;
            TableName?: string;
            TenderDesc?: string;
            TenderType?: string;
            TenderTypeId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.TenderTypeItem> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.TenderTypeItem> {}
    }
    export interface ITenderTypeService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
