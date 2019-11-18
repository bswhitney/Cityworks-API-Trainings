import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseDataDetailServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaDataGroupId: number;
            CalcRateFlag?: string;
            CaObjectId?: number;
            CaseDataDetailId: number;
            ColumnSequence?: string;
            CommentFlag?: string;
            CommentValue?: string;
            DateFlag?: string;
            DateValue?: Date;
            DetailCode?: string;
            DetailDesc?: string;
            DetailSequence?: number;
            ListValue?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            NumberValue?: number;
            Q1Q2Q3Flag?: string;
            Q2Value?: number;
            Q3Value?: number;
            Quantity?: number;
            Rate?: number;
            TextFlag?: string;
            TextValue?: string;
            Value?: number;
            ValueFlag?: string;
            YesNoFlag?: string;
            YesNoValue?: string;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataGroupId?: number;
            CalcRateFlag?: string;
            CaseDataDetailId?: number;
            CommentFlag?: string;
            DateFlag?: string;
            DetailCode?: string;
            DetailDesc?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            TextFlag?: string;
            ValueFlag?: string;
            YesNoFlag?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataGroupId?: number;
            CalcRateFlag?: string;
            CaseDataDetailId?: number;
            CommentFlag?: string;
            DateFlag?: string;
            DetailCode?: string;
            DetailDesc?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            TextFlag?: string;
            ValueFlag?: string;
            YesNoFlag?: string;
        }
        export interface WIPAdd extends ServiceTypes.CoreRequestBase {
            CaDataGroupId: number;
            CalcRateFlag?: string;
            CaseDataDetailId: number;
            ColumnSequence: string;
            CommentFlag?: string;
            CommentValue?: string;
            DateFlag?: string;
            DateValue?: Date;
            DetailCode: string;
            DetailDesc?: string;
            DetailSequence: number;
            ListValue?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            NumberValue?: number;
            Q1Q2Q3Flag?: string;
            Q2Value?: number;
            Q3Value?: number;
            Quantity?: number;
            Rate?: number;
            TextFlag?: string;
            TextValue?: string;
            Value?: number;
            ValueFlag?: string;
            YesNoFlag?: string;
            YesNoValue?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDataDetailItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaDataDetailItemBase[]> {}
    }
    export interface ICaseDataDetailService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
        WIPAdd?: (request: Requests.WIPAdd) => AbortablePromise<Responses.Add>;
    }
}
