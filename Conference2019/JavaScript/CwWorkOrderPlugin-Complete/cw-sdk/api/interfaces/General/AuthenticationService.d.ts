import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace AuthenticationServiceTypes { 
    export namespace Requests {
        export interface Authenticate extends ServiceTypes.CoreRequestBase {
            Expires?: number;
            LoginName: string;
            Password: string;
        }
        export interface CityworksOnlineAuthenticate extends ServiceTypes.CoreRequestBase {
            LoginName: string;
            Password: string;
        }
        export interface CityworksOnlineSites extends ServiceTypes.CoreRequestBase {
            LoginName: string;
            Password: string;
        }
        export interface Domains extends ServiceTypes.CoreRequestBase {
        }
        export interface User extends ServiceTypes.CoreRequestBase {
            LoginName?: string;
        }
        export interface Validate extends ServiceTypes.CoreRequestBase {
            Token: string;
        }
        export interface Version extends ServiceTypes.CoreRequestBase {
        }
    }
    export namespace Responses {
        export interface Authenticate extends ServiceTypes.CoreResponseBase_<CoreTypes.AuthToken> {}
        export interface CityworksOnlineAuthenticate extends ServiceTypes.CoreResponseBase_<CoreTypes.CityworksOnlineAuthToken> {}
        export interface CityworksOnlineSites extends ServiceTypes.CoreResponseBase_<CoreTypes.CityworksOnlineSite[]> {}
        export interface Domains extends ServiceTypes.CoreResponseBase_<CoreTypes.CWDomain[]> {}
        export interface User extends ServiceTypes.CoreResponseBase_<CoreTypes.CWUser> {}
        export interface Validate extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface Version extends ServiceTypes.CoreResponseBase_<string> {}
    }
    export interface IAuthenticationService {
        Authenticate?: (request: Requests.Authenticate) => AbortablePromise<Responses.Authenticate>;
        CityworksOnlineAuthenticate?: (request: Requests.CityworksOnlineAuthenticate) => AbortablePromise<Responses.CityworksOnlineAuthenticate>;
        CityworksOnlineSites?: (request: Requests.CityworksOnlineSites) => AbortablePromise<Responses.CityworksOnlineSites>;
        Domains?: (request: Requests.Domains) => AbortablePromise<Responses.Domains>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
        Validate?: (request: Requests.Validate) => AbortablePromise<Responses.Validate>;
        Version?: (request: Requests.Version) => AbortablePromise<Responses.Version>;
    }
}
