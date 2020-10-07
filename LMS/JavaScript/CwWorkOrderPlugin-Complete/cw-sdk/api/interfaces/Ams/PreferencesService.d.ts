import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace PreferencesServiceTypes { 
    export namespace Requests {
        export interface Global extends ServiceTypes.CoreRequestBase {
            Categories?: string[];
            PreferenceNames?: string[];
        }
        export interface User extends ServiceTypes.CoreRequestBase {
            Categories?: string[];
            DomainId?: number;
            EmployeeSid?: number;
            PreferenceNames?: string[];
        }
        export interface UserSave extends ServiceTypes.CoreRequestBase {
            Category?: string;
            DefaultValue?: string;
            Element?: string;
            EmployeeSid?: number;
        }
    }
    export namespace Responses {
        export interface Global extends ServiceTypes.CoreResponseBase_<CoreTypes.GlobalPreference[]> {}
        export interface User extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.UserPreferences> {}
        export interface UserSave extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.UserPreference> {}
    }
    export interface IPreferencesService {
        Global?: (request: Requests.Global) => AbortablePromise<Responses.Global>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
        UserSave?: (request: Requests.UserSave) => AbortablePromise<Responses.UserSave>;
    }
}
