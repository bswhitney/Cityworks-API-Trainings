import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EscrowPaymentReceiptServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AmountBalance?: number;
            CommentText?: string;
            LoginId?: string;
            OrgId?: number;
            ReceiptDate?: Date;
            ReceiptFileName?: string;
            TotalAmountDue?: number;
            TotalAmountTendered?: number;
            UserId?: number;
        }
        export interface GetList extends ServiceTypes.CoreRequestBase {
            Limit?: number;
            Offset?: number;
            SortDir?: number;
            SortField?: string;
            WhereClause?: CoreTypes.FilterCondition[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AmountBalance?: number;
            CommentText?: string;
            EscrowPaymentReceiptId?: number;
            LoginId?: string;
            OrgId?: number;
            ReceiptDate?: Date;
            ReceiptFileName?: string;
            TotalAmountDue?: number;
            TotalAmountTendered?: number;
            UserId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.EscrowPaymentReceiptItem> {}
        export interface GetList extends ServiceTypes.CoreResponsePaged_<CoreTypes.EscrowPaymentReceiptItem[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.EscrowPaymentReceiptItem> {}
    }
    export interface IEscrowPaymentReceiptService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        GetList?: (request: Requests.GetList) => AbortablePromise<Responses.GetList>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
