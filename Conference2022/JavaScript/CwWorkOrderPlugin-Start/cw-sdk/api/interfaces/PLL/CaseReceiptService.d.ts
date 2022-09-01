import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseReceiptServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AmountBalance?: number;
            CommentText?: string;
            LoginId: string;
            OrgId: number;
            ReceiptDate: Date;
            ReceiptFileName: string;
            TotalAmountDue: number;
            TotalAmountTendered: number;
            UserId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AmountBalance?: number;
            CaReceiptId?: number;
            CommentText?: string;
            LoginId?: string;
            OrgId?: number;
            ReceiptFileName?: string;
            TotalAmountDue?: number;
            TotalAmountTendered?: number;
            UserId?: number;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            AmountBalance?: number;
            CaReceiptId?: number;
            CommentText?: string;
            LoginId?: string;
            OrgId?: number;
            ReceiptFileName?: string;
            TotalAmountDue?: number;
            TotalAmountTendered?: number;
            UserId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaReceiptItem> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaReceiptItem[]> {}
    }
    export interface ICaseReceiptService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}
