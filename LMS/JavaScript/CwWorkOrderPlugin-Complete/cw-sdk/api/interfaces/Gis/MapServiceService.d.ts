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
        export interface InitialExtent extends ServiceTypes.CoreRequestBase {
        }
        export interface InspectionConfiguration extends ServiceTypes.CoreRequestBase {
            InspectionId?: number;
        }
        export interface ServiceRequestConfiguration extends ServiceTypes.CoreRequestBase {
            RequestId?: number;
        }
        export interface User extends ServiceTypes.CoreRequestBase {
            AllDomains?: boolean;
            AllGroups?: boolean;
            Security?: string[];
        }
        export interface WorkOrderConfiguration extends ServiceTypes.CoreRequestBase {
            WorkOrderSid?: number;
        }
    }
    export namespace Responses {
        export interface Configuration extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
        export interface Domain extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
        export interface DownloadMobileMapCache extends ServiceTypes.CoreResponseBase {}
        export interface InitialExtent extends ServiceTypes.CoreResponseBase_<CoreTypes.EsriExtent> {}
        export interface InspectionConfiguration extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
        export interface ServiceRequestConfiguration extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
        export interface User extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
        export interface WorkOrderConfiguration extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
    }
    export interface IMapServiceService {
        Configuration?: (request: Requests.Configuration) => AbortablePromise<Responses.Configuration>;
        Domain?: (request: Requests.Domain) => AbortablePromise<Responses.Domain>;
        DownloadMobileMapCache?: (request: Requests.DownloadMobileMapCache) => AbortablePromise<Responses.DownloadMobileMapCache>;
        InitialExtent?: (request: Requests.InitialExtent) => AbortablePromise<Responses.InitialExtent>;
        InspectionConfiguration?: (request: Requests.InspectionConfiguration) => AbortablePromise<Responses.InspectionConfiguration>;
        ServiceRequestConfiguration?: (request: Requests.ServiceRequestConfiguration) => AbortablePromise<Responses.ServiceRequestConfiguration>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
        WorkOrderConfiguration?: (request: Requests.WorkOrderConfiguration) => AbortablePromise<Responses.WorkOrderConfiguration>;
    }
}
