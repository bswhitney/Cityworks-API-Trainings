import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace MapServiceServiceTypes { 
    export namespace Requests {
        export interface Configuration extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            GroupId?: number;
            MapServiceId?: number;
            Security?: string[];
            UserId?: number;
        }
        export interface Domain extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        export interface DownloadMobileMapCache extends ServiceTypes.CoreRequestBase {
            MobileMapCacheId?: number;
        }
        export interface User extends ServiceTypes.CoreRequestBase {
            AllDomains?: boolean;
            AllGroups?: boolean;
            Security?: string[];
        }
    }
    export namespace Responses {
        export interface Configuration extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
        export interface Domain extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
        export interface DownloadMobileMapCache extends ServiceTypes.CoreResponseBase {}
        export interface User extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
    }
    export interface IMapServiceService {
        Configuration?: (request: Requests.Configuration) => AbortablePromise<Responses.Configuration>;
        Domain?: (request: Requests.Domain) => AbortablePromise<Responses.Domain>;
        DownloadMobileMapCache?: (request: Requests.DownloadMobileMapCache) => AbortablePromise<Responses.DownloadMobileMapCache>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
    }
}
