import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ActivityLinkServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            DestId?: string;
            DestSid: number;
            DestType: Enums.ActivityLinkActivityType;
            LinkType: Enums.ActivityLinkType;
            SourceId?: string;
            SourceSid: number;
            SourceType: Enums.ActivityLinkActivityType;
        }
        export interface ByActivityIds extends ServiceTypes.CoreRequestBase {
            ActivityIds: string[];
            ActivityType: Enums.ActivityLinkActivityType;
        }
        export interface ByActivitySids extends ServiceTypes.CoreRequestBase {
            ActivitySids: number[];
            ActivityType: Enums.ActivityLinkActivityType;
        }
        export interface CloneByActivitySid extends ServiceTypes.CoreRequestBase {
            DestinationActivitySid: number;
            DestinationActivityType: Enums.ActivityLinkActivityType;
            SourceActivitySid: number;
            SourceActivityType: Enums.ActivityLinkActivityType;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            ActivityLinkId: number;
        }
        export interface Remove extends ServiceTypes.CoreRequestBase {
            DestId?: string;
            DestSid: number;
            DestType: Enums.ActivityLinkActivityType;
            LinkType: Enums.ActivityLinkType;
            SourceId?: string;
            SourceSid: number;
            SourceType: Enums.ActivityLinkActivityType;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.ActivityLink> {}
        export interface ByActivityIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ActivityLink[]> {}
        export interface ByActivitySids extends ServiceTypes.CoreResponseBase_<CoreTypes.ActivityLink[]> {}
        export interface CloneByActivitySid extends ServiceTypes.CoreResponseBase_<CoreTypes.ActivityLink[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase {}
        export interface Remove extends ServiceTypes.CoreResponseBase {}
    }
    export interface IActivityLinkService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByActivityIds?: (request: Requests.ByActivityIds) => AbortablePromise<Responses.ByActivityIds>;
        ByActivitySids?: (request: Requests.ByActivitySids) => AbortablePromise<Responses.ByActivitySids>;
        CloneByActivitySid?: (request: Requests.CloneByActivitySid) => AbortablePromise<Responses.CloneByActivitySid>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Remove?: (request: Requests.Remove) => AbortablePromise<Responses.Remove>;
    }
}
