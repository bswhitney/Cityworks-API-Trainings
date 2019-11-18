import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CasePaymentServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaFeeId: number;
            CaObjectId: number;
            CaReceiptId?: number;
            CommentText?: string;
            CustFeeSeq: number;
            DateReceived: Date;
            DateVoided?: Date;
            PaymentAccount?: string;
            PaymentAmount: number;
            PaymentDate: Date;
            ReceivedBy: number;
            ReferenceInfo?: string;
            TenderTypeId: number;
            VoidedBy?: number;
        }
        export interface AddDeposit extends ServiceTypes.CoreRequestBase {
            CaDepositId: number;
            CaObjectId: number;
            CaReceiptId?: number;
            CommentText?: string;
            DateReceived: Date;
            DateVoided?: Date;
            PaymentAccount?: string;
            PaymentAmount: number;
            PaymentDate: Date;
            ReceivedBy: number;
            ReferenceInfo?: string;
            TenderTypeId: number;
            VoidedBy?: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaPaymentId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaPaymentId?: number;
            CommentText?: string;
            FeeAmount?: number;
            FeeCode?: string;
            FeeDesc?: string;
            PaymentAccount?: string;
            PaymentAmount?: number;
            TenderType?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentItemBase> {}
        export interface AddDeposit extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICasePaymentService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddDeposit?: (request: Requests.AddDeposit) => AbortablePromise<Responses.AddDeposit>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
