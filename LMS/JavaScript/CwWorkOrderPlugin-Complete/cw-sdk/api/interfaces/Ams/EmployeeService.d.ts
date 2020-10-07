import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EmployeeServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AdDomain?: string;
            BenefitRate?: number;
            BenefitType?: number;
            CustomFieldValues?: {[key: number]: string};
            DefaultImgPath?: string;
            DomainId?: number;
            Email?: string;
            EmailReq?: string;
            EmployeeId?: string;
            FirstName?: string;
            GroupIds?: number[];
            HolidayRate?: number;
            HolidayType?: number;
            HourlyRate?: number;
            IsActive?: boolean;
            IsDomainAdmin?: boolean;
            LastName: string;
            LicenseCodes?: string[];
            LoginName?: string;
            MapServiceId?: number;
            MiddleInitial?: string;
            MobileMapCacheId?: number;
            Organization?: string;
            OtherRate?: number;
            OtherRateType?: number;
            OverheadRate?: number;
            OverheadType?: number;
            OvertimeRate?: number;
            OvertimeType?: number;
            Pager?: string;
            Password?: string;
            ShiftDiffRate?: number;
            ShiftDiffType?: number;
            StandbyRate?: number;
            StandbyType?: number;
            Title?: string;
            UniqueName?: string;
            WorkPhone?: string;
        }
        export interface AddLicensedItems extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            LicenseCodes: string[];
        }
        export interface All extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
        }
        export interface ByGroupId extends ServiceTypes.CoreRequestBase {
            GroupId: number;
            IncludeInactive?: boolean;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            EmployeeSid: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        export interface DeleteLicensedItems extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            LicenseCodes: string[];
        }
        export interface Groups extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
        }
        export interface NamesAreUnique extends ServiceTypes.CoreRequestBase {
            Names?: string[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AdDomain?: string[];
            DomainId?: number[];
            Email?: string[];
            EmployeeId?: string[];
            EmployeeSid?: number[];
            FirstName?: string[];
            FullName?: string[];
            IsActive?: boolean;
            IsUser?: boolean;
            LastName?: string[];
            LoginName?: string[];
            MaxResults?: number;
            Organization?: string[];
            UniqueName?: string[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AdDomain?: string;
            BenefitRate?: number;
            BenefitType?: number;
            CustomFieldValues?: {[key: number]: string};
            DefaultImgPath?: string;
            DomainId?: number;
            Email?: string;
            EmailReq?: string;
            EmployeeId?: string;
            EmployeeSids: number[];
            FirstName?: string;
            HolidayRate?: number;
            HolidayType?: number;
            HourlyRate?: number;
            IsActive?: boolean;
            LastName?: string;
            LoginName?: string;
            MapServiceId?: number;
            MiddleInitial?: string;
            MobileMapCacheId?: number;
            Organization?: string;
            OtherRate?: number;
            OtherRateType?: number;
            OverheadRate?: number;
            OverheadType?: number;
            OvertimeRate?: number;
            OvertimeType?: number;
            Pager?: string;
            Password?: string;
            ShiftDiffRate?: number;
            ShiftDiffType?: number;
            StandbyRate?: number;
            StandbyType?: number;
            Title?: string;
            UniqueName?: string;
            WorkPhone?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeBase> {}
        export interface AddLicensedItems extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface All extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeBase[]> {}
        export interface ByGroupId extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeBase[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteLicensedItems extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Groups extends ServiceTypes.CoreResponseBase_<CoreTypes.CwGroupEmployees[]> {}
        export interface NamesAreUnique extends ServiceTypes.CoreResponseBase_<{[key: string]: boolean}> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeBase[]> {}
    }
    export interface IEmployeeService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddLicensedItems?: (request: Requests.AddLicensedItems) => AbortablePromise<Responses.AddLicensedItems>;
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        ByGroupId?: (request: Requests.ByGroupId) => AbortablePromise<Responses.ByGroupId>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteLicensedItems?: (request: Requests.DeleteLicensedItems) => AbortablePromise<Responses.DeleteLicensedItems>;
        Groups?: (request: Requests.Groups) => AbortablePromise<Responses.Groups>;
        NamesAreUnique?: (request: Requests.NamesAreUnique) => AbortablePromise<Responses.NamesAreUnique>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
