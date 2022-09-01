import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace BusinessCaseServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            AssignedTo?: number;
            BLicenseFlag?: string;
            BusCaseCode?: string;
            BusCaseDesc?: string;
            CaseTypeId?: number;
            CheckQuickCreate?: string;
            ExpiredFlag?: string;
            InfoFlag?: string;
            InfoText?: string;
            OrgId?: number;
            RegisteredFlag?: string;
            ShowQuickCreate?: string;
            SubTypeId?: number;
            TermsFlag?: string;
            TermsText?: string;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            AssignedTo?: number;
            BLicenseFlag?: string;
            BusCaseCode?: string;
            BusCaseDesc?: string;
            BusCaseId?: number;
            CaseTypeId?: number;
            CheckQuickCreate?: string;
            ExpiredFlag?: string;
            InfoFlag?: string;
            InfoText?: string;
            OrgId?: number;
            RegisteredFlag?: string;
            ShowQuickCreate?: string;
            SubTypeId?: number;
            TermsFlag?: string;
            TermsText?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.BusinessCaseItem> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.BusinessCaseItem> {}
    }
    export interface IBusinessCaseService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
