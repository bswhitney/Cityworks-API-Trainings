import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace DesignerServiceTypes { 
    export namespace Requests {
        export interface AddAttachmentMapping extends ServiceTypes.CoreRequestBase {
            Alias?: string;
            Source: string;
        }
        export interface AddCodeDescription extends ServiceTypes.CoreRequestBase {
            Code: string;
            CodeType: string;
            Description: string;
            IsActive?: boolean;
        }
        export interface AddCodeDescScore extends ServiceTypes.CoreRequestBase {
            Code: string;
            Description: string;
            Score?: number;
        }
        export interface AddCodeType extends ServiceTypes.CoreRequestBase {
            CodeFormat: string;
            CodeType: string;
            Description: string;
            Module: string;
        }
        export interface AddDescScore extends ServiceTypes.CoreRequestBase {
            CodeType: string;
            Description: string;
            Score?: number;
        }
        export interface AddDomain extends ServiceTypes.CoreRequestBase {
            Description?: string;
            DomainName?: string;
            WKID?: number;
        }
        export interface AddEmployeeSkillCode extends ServiceTypes.CoreRequestBase {
            Code: string;
            Description: string;
            IsActive?: boolean;
        }
        export interface AddGroup extends ServiceTypes.CoreRequestBase {
            Description?: string;
            DomainId?: number;
            EmployeeSids?: number[];
            GISRight?: number;
            GroupName: string;
            MapServiceId?: number;
        }
        export interface AddRole extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
            Role: string;
        }
        export interface AddUsersToRole extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            Role: string;
        }
        export interface AttachmentMappings extends ServiceTypes.CoreRequestBase {
        }
        export interface CctvCodes extends ServiceTypes.CoreRequestBase {
        }
        export interface CodeDescriptions extends ServiceTypes.CoreRequestBase {
            CodeType: string;
            IncludeInactive?: boolean;
        }
        export interface CodeDescScores extends ServiceTypes.CoreRequestBase {
        }
        export interface CodeTypes extends ServiceTypes.CoreRequestBase {
            Format: string;
        }
        export interface CreateUser extends ServiceTypes.CoreRequestBase {
            Answer: string;
            Email: string;
            EmployeeSid: number;
            Password: string;
            Question: string;
            Username?: string;
        }
        export interface DeleteAttachmentMappings extends ServiceTypes.CoreRequestBase {
            Ids: number[];
        }
        export interface DeleteCodeDescriptions extends ServiceTypes.CoreRequestBase {
            Codes: string[];
            CodeType: string;
        }
        export interface DeleteDomains extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface DeleteEmployeeSkillCodes extends ServiceTypes.CoreRequestBase {
            Codes: string[];
        }
        export interface DeleteGroups extends ServiceTypes.CoreRequestBase {
            GroupIds?: number[];
        }
        export interface DeleteLogin extends ServiceTypes.CoreRequestBase {
            LoginName: string;
        }
        export interface DeleteRoles extends ServiceTypes.CoreRequestBase {
            Roles?: string[];
        }
        export interface DescScores extends ServiceTypes.CoreRequestBase {
            CodeType: string;
        }
        export interface Domains extends ServiceTypes.CoreRequestBase {
        }
        export interface EmployeeGroups extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        export interface GroupMembers extends ServiceTypes.CoreRequestBase {
            GroupId?: number;
        }
        export interface Groups extends ServiceTypes.CoreRequestBase {
            GroupIds?: number[];
        }
        export interface RemoveUsersFromRole extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
            Role?: string;
        }
        export interface Roles extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        export interface SaveCctvCode extends ServiceTypes.CoreRequestBase {
            Cause: string;
            Code: string;
            CodeGroup: string;
            Description: string;
            Grade?: number;
            HRange?: number;
            LoRange?: number;
            ValueField?: string;
        }
        export interface UnlockUsers extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        export interface UpdateAttachmentMapping extends ServiceTypes.CoreRequestBase {
            Alias?: string;
            Id: number;
            Source?: string;
        }
        export interface UpdateCodeDescription extends ServiceTypes.CoreRequestBase {
            Code: string;
            CodeType: string;
            Description: string;
            IsActive?: boolean;
        }
        export interface UpdateCodeDescScore extends ServiceTypes.CoreRequestBase {
            Code: string;
            Description: string;
            Score?: number;
        }
        export interface UpdateCodeType extends ServiceTypes.CoreRequestBase {
            CodeType: string;
            Description: string;
            Module: string;
        }
        export interface UpdateDescScore extends ServiceTypes.CoreRequestBase {
            CodeType: string;
            Description: string;
            Score?: number;
        }
        export interface UpdateDomain extends ServiceTypes.CoreRequestBase {
            Description?: string;
            DomainId: number;
            DomainName?: string;
            MapServiceId?: number;
        }
        export interface UpdateGroup extends ServiceTypes.CoreRequestBase {
            Description?: string;
            EmployeeSids?: number[];
            GISRight?: number;
            GroupId: number;
            GroupName?: string;
            MapServiceId?: number;
        }
        export interface UserRoles extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        export interface UsersInRole extends ServiceTypes.CoreRequestBase {
            Role?: string;
        }
        export interface UserStatus extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
    }
    export namespace Responses {
        export interface AddAttachmentMapping extends ServiceTypes.CoreResponseBase_<CoreTypes.AttachmentMapping> {}
        export interface AddCodeDescription extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc> {}
        export interface AddCodeDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDescScore> {}
        export interface AddCodeType extends ServiceTypes.CoreResponseBase_<CoreTypes.CWCodeType> {}
        export interface AddDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.DescScore> {}
        export interface AddDomain extends ServiceTypes.CoreResponseBase_<CoreTypes.CWDomain> {}
        export interface AddEmployeeSkillCode extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc> {}
        export interface AddGroup extends ServiceTypes.CoreResponseBase_<CoreTypes.CWGroup> {}
        export interface AddRole extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface AddUsersToRole extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface AttachmentMappings extends ServiceTypes.CoreResponseBase_<CoreTypes.AttachmentMapping[]> {}
        export interface CctvCodes extends ServiceTypes.CoreResponseBase_<CoreTypes.CctvCode[]> {}
        export interface CodeDescriptions extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface CodeDescScores extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDescScore[]> {}
        export interface CodeTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.CWCodeType[]> {}
        export interface CreateUser extends ServiceTypes.CoreResponseBase_<CoreTypes.CWUser> {}
        export interface DeleteAttachmentMappings extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteCodeDescriptions extends ServiceTypes.CoreResponseBase_<{[key: string]: boolean}> {}
        export interface DeleteDomains extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteEmployeeSkillCodes extends ServiceTypes.CoreResponseBase_<{[key: string]: boolean}> {}
        export interface DeleteGroups extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteLogin extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface DeleteRoles extends ServiceTypes.CoreResponseBase_<{[key: string]: boolean}> {}
        export interface DescScores extends ServiceTypes.CoreResponseBase_<CoreTypes.DescScore[]> {}
        export interface Domains extends ServiceTypes.CoreResponseBase_<CoreTypes.CWDomain[]> {}
        export interface EmployeeGroups extends ServiceTypes.CoreResponseBase_obsolete_<{[key: number]: number[]}> {}
        export interface GroupMembers extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Groups extends ServiceTypes.CoreResponseBase_<CoreTypes.CWGroup[]> {}
        export interface RemoveUsersFromRole extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Roles extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface SaveCctvCode extends ServiceTypes.CoreResponseBase_<CoreTypes.CctvCode> {}
        export interface UnlockUsers extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface UpdateAttachmentMapping extends ServiceTypes.CoreResponseBase_<CoreTypes.AttachmentMapping> {}
        export interface UpdateCodeDescription extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc> {}
        export interface UpdateCodeDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDescScore> {}
        export interface UpdateCodeType extends ServiceTypes.CoreResponseBase_<CoreTypes.CWCodeType> {}
        export interface UpdateDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.DescScore> {}
        export interface UpdateDomain extends ServiceTypes.CoreResponseBase_<CoreTypes.CWDomain> {}
        export interface UpdateGroup extends ServiceTypes.CoreResponseBase_<CoreTypes.CWGroup> {}
        export interface UserRoles extends ServiceTypes.CoreResponseBase_<{[key: number]: string[]}> {}
        export interface UsersInRole extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface UserStatus extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.CwUserStatus}> {}
    }
    export interface IDesignerService {
        AddAttachmentMapping?: (request: Requests.AddAttachmentMapping) => AbortablePromise<Responses.AddAttachmentMapping>;
        AddCodeDescription?: (request: Requests.AddCodeDescription) => AbortablePromise<Responses.AddCodeDescription>;
        AddCodeDescScore?: (request: Requests.AddCodeDescScore) => AbortablePromise<Responses.AddCodeDescScore>;
        AddCodeType?: (request: Requests.AddCodeType) => AbortablePromise<Responses.AddCodeType>;
        AddDescScore?: (request: Requests.AddDescScore) => AbortablePromise<Responses.AddDescScore>;
        AddDomain?: (request: Requests.AddDomain) => AbortablePromise<Responses.AddDomain>;
        AddEmployeeSkillCode?: (request: Requests.AddEmployeeSkillCode) => AbortablePromise<Responses.AddEmployeeSkillCode>;
        AddGroup?: (request: Requests.AddGroup) => AbortablePromise<Responses.AddGroup>;
        AddRole?: (request: Requests.AddRole) => AbortablePromise<Responses.AddRole>;
        AddUsersToRole?: (request: Requests.AddUsersToRole) => AbortablePromise<Responses.AddUsersToRole>;
        AttachmentMappings?: (request: Requests.AttachmentMappings) => AbortablePromise<Responses.AttachmentMappings>;
        CctvCodes?: (request: Requests.CctvCodes) => AbortablePromise<Responses.CctvCodes>;
        CodeDescriptions?: (request: Requests.CodeDescriptions) => AbortablePromise<Responses.CodeDescriptions>;
        CodeDescScores?: (request: Requests.CodeDescScores) => AbortablePromise<Responses.CodeDescScores>;
        CodeTypes?: (request: Requests.CodeTypes) => AbortablePromise<Responses.CodeTypes>;
        CreateUser?: (request: Requests.CreateUser) => AbortablePromise<Responses.CreateUser>;
        DeleteAttachmentMappings?: (request: Requests.DeleteAttachmentMappings) => AbortablePromise<Responses.DeleteAttachmentMappings>;
        DeleteCodeDescriptions?: (request: Requests.DeleteCodeDescriptions) => AbortablePromise<Responses.DeleteCodeDescriptions>;
        DeleteDomains?: (request: Requests.DeleteDomains) => AbortablePromise<Responses.DeleteDomains>;
        DeleteEmployeeSkillCodes?: (request: Requests.DeleteEmployeeSkillCodes) => AbortablePromise<Responses.DeleteEmployeeSkillCodes>;
        DeleteGroups?: (request: Requests.DeleteGroups) => AbortablePromise<Responses.DeleteGroups>;
        DeleteLogin?: (request: Requests.DeleteLogin) => AbortablePromise<Responses.DeleteLogin>;
        DeleteRoles?: (request: Requests.DeleteRoles) => AbortablePromise<Responses.DeleteRoles>;
        DescScores?: (request: Requests.DescScores) => AbortablePromise<Responses.DescScores>;
        Domains?: (request: Requests.Domains) => AbortablePromise<Responses.Domains>;
        EmployeeGroups?: (request: Requests.EmployeeGroups) => AbortablePromise<Responses.EmployeeGroups>;
        GroupMembers?: (request: Requests.GroupMembers) => AbortablePromise<Responses.GroupMembers>;
        Groups?: (request: Requests.Groups) => AbortablePromise<Responses.Groups>;
        RemoveUsersFromRole?: (request: Requests.RemoveUsersFromRole) => AbortablePromise<Responses.RemoveUsersFromRole>;
        Roles?: (request: Requests.Roles) => AbortablePromise<Responses.Roles>;
        SaveCctvCode?: (request: Requests.SaveCctvCode) => AbortablePromise<Responses.SaveCctvCode>;
        UnlockUsers?: (request: Requests.UnlockUsers) => AbortablePromise<Responses.UnlockUsers>;
        UpdateAttachmentMapping?: (request: Requests.UpdateAttachmentMapping) => AbortablePromise<Responses.UpdateAttachmentMapping>;
        UpdateCodeDescription?: (request: Requests.UpdateCodeDescription) => AbortablePromise<Responses.UpdateCodeDescription>;
        UpdateCodeDescScore?: (request: Requests.UpdateCodeDescScore) => AbortablePromise<Responses.UpdateCodeDescScore>;
        UpdateCodeType?: (request: Requests.UpdateCodeType) => AbortablePromise<Responses.UpdateCodeType>;
        UpdateDescScore?: (request: Requests.UpdateDescScore) => AbortablePromise<Responses.UpdateDescScore>;
        UpdateDomain?: (request: Requests.UpdateDomain) => AbortablePromise<Responses.UpdateDomain>;
        UpdateGroup?: (request: Requests.UpdateGroup) => AbortablePromise<Responses.UpdateGroup>;
        UserRoles?: (request: Requests.UserRoles) => AbortablePromise<Responses.UserRoles>;
        UsersInRole?: (request: Requests.UsersInRole) => AbortablePromise<Responses.UsersInRole>;
        UserStatus?: (request: Requests.UserStatus) => AbortablePromise<Responses.UserStatus>;
    }
}
