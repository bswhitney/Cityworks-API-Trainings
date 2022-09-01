import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EscrowPaymentServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            EscrowPayments?: CoreTypes.EscrowPaymentItem[];
        }
        export interface GetList extends ServiceTypes.CoreRequestBase {
            Limit?: number;
            Offset?: number;
            SortDir?: number;
            SortField?: string;
            WhereClause?: CoreTypes.FilterCondition[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CommentText?: string;
            ContractorId?: number;
            DateModified?: Date;
            DateReceived?: Date;
            DateVoided?: Date;
            EscrowPaymentId?: number;
            EscrowPaymentReceiptId?: number;
            ModifiedBy?: number;
            PaymentAccount?: string;
            PaymentAmount?: number;
            PaymentDate?: Date;
            ReceivedBy?: number;
            ReferenceInfo?: string;
            TenderType?: string;
            TenderTypeId?: number;
            Voided?: boolean;
            VoidedBy?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.EscrowPaymentItem[]> {}
        export interface GetList extends ServiceTypes.CoreResponsePaged_<CoreTypes.EscrowPaymentItem[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.EscrowPaymentItem> {}
    }
    export interface IEscrowPaymentService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        GetList?: (request: Requests.GetList) => AbortablePromise<Responses.GetList>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
