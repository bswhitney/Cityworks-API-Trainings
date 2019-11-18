import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace RecentActivityServiceTypes { 
    export namespace Requests {
        export interface CaseViewed extends ServiceTypes.CoreRequestBase {
            CaseId?: number;
            DateTimeStamp?: Date;
        }
        export interface InspectionViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            InspectionId: number;
        }
        export interface RequestViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            RequestId: number;
        }
        export interface User extends ServiceTypes.CoreRequestBase {
            IncludeCases?: boolean;
            IncludeInspections?: boolean;
            IncludeRequests?: boolean;
            IncludeWorkOrders?: boolean;
            MaxResults?: number;
        }
        export interface WorkOrderViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            WorkOrderId: string;
        }
    }
    export namespace Responses {
        export interface CaseViewed extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface InspectionViewed extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface RequestViewed extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface User extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.RecentActivity[]> {}
        export interface WorkOrderViewed extends ServiceTypes.CoreResponseBase_obsolete {}
    }
    export interface IRecentActivityService {
        CaseViewed?: (request: Requests.CaseViewed) => AbortablePromise<Responses.CaseViewed>;
        InspectionViewed?: (request: Requests.InspectionViewed) => AbortablePromise<Responses.InspectionViewed>;
        RequestViewed?: (request: Requests.RequestViewed) => AbortablePromise<Responses.RequestViewed>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
        WorkOrderViewed?: (request: Requests.WorkOrderViewed) => AbortablePromise<Responses.WorkOrderViewed>;
    }
}
