import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CasePaymentRefundServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaPaymentId: number;
            Comments?: string;
            RefundAmount: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaPaymentRefundId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaPaymentId?: number;
            CaPaymentRefundId?: number;
            Comments?: string;
            RefundAmount?: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CaPaymentRefundId: number;
            Voided: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentRefundItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentRefundItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentRefundItemBase> {}
    }
    export interface ICasePaymentRefundService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
