import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseTypeServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            AutoExtExprFromInsp?: number;
            AutoNumberFlag?: string;
            BLicenseFlag?: string;
            CaseGroup?: string;
            CaseType?: string;
            CaseTypeDesc?: string;
            DepartmentId?: number;
            DivisionId?: number;
            ExpiredFlag?: string;
            InitialCaseStatusId?: number;
            InTakeExpirationTypeId?: number;
            NumberingGroupId?: number;
            OrgId?: number;
            ReCalcExpirationStatus?: number;
            ReCalcExpirationTypeId?: number;
            RegisteredFlag?: string;
            RemoveTempCharacterStatus?: string;
            TableName?: string;
            UseTempCharacter?: string;
        }
        export interface GetList extends ServiceTypes.CoreRequestBase {
            FilterColumn?: string;
            FilterOperator?: string;
            FilterValue?: string;
            GroupBy?: string;
            HavingCondition?: string;
            PageNumber?: number;
            PageSize?: number;
            SingleRecordFlag?: boolean;
            SortColumn?: string;
            SortDirection?: string;
            WhereClause?: string;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaseType?: string;
            CaseTypeDesc?: string;
            CaseTypeId?: number;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaseType?: string;
            CaseTypeDesc?: string;
            CaseTypeId?: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            AutoExtExprFromInsp?: number;
            AutoNumberFlag?: string;
            BLicenseFlag?: string;
            CaseGroup?: string;
            CaseType?: string;
            CaseTypeDesc?: string;
            CaseTypeId?: number;
            DepartmentId?: number;
            DivisionId?: number;
            ExpiredFlag?: string;
            InitialCaseStatusId?: number;
            InTakeExpirationTypeId?: number;
            NumberingGroupId?: number;
            OrgId?: number;
            ReCalcExpirationStatus?: number;
            ReCalcExpirationTypeId?: number;
            RegisteredFlag?: string;
            RemoveTempCharacterStatus?: string;
            TableName?: string;
            UseTempCharacter?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaseTypeItem> {}
        export interface GetList extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaseTypeItem[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaseTypeItem[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CaseTypeItem> {}
    }
    export interface ICaseTypeService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        GetList?: (request: Requests.GetList) => AbortablePromise<Responses.GetList>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
