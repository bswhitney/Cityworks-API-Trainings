import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace RecentActivityServiceTypes { 
    export namespace Requests {
        export interface CaseViewed extends ServiceTypes.CoreRequestBase {
            CaseId?: number;
            DateTimeStamp?: Date;
        }
        export interface Clear extends ServiceTypes.CoreRequestBase {
            Cases?: boolean;
            EmployeeSids?: number[];
            Inspections?: boolean;
            ManholeInspections?: boolean;
            Requests?: boolean;
            TvInspections?: boolean;
            WorkOrders?: boolean;
        }
        export interface InspectionViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            InspectionId: number;
        }
        export interface ManholeInspectionViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            InspectionId: number;
        }
        export interface RequestViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            RequestId: number;
        }
        export interface TvInspectionViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            TvId: number;
        }
        export interface User extends ServiceTypes.CoreRequestBase {
            IncludeCases?: boolean;
            IncludeInspections?: boolean;
            IncludeManholeInspections?: boolean;
            IncludeRequests?: boolean;
            IncludeTvInspections?: boolean;
            IncludeWorkOrders?: boolean;
            MaxResults?: number;
        }
        export interface WorkOrderViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            WorkOrderId?: string;
            WorkOrderSid: number;
        }
    }
    export namespace Responses {
        export interface CaseViewed extends ServiceTypes.CoreResponseBase {}
        export interface Clear extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface InspectionViewed extends ServiceTypes.CoreResponseBase {}
        export interface ManholeInspectionViewed extends ServiceTypes.CoreResponseBase {}
        export interface RequestViewed extends ServiceTypes.CoreResponseBase {}
        export interface TvInspectionViewed extends ServiceTypes.CoreResponseBase {}
        export interface User extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.RecentActivity[]> {}
        export interface WorkOrderViewed extends ServiceTypes.CoreResponseBase {}
    }
    export interface IRecentActivityService {
        CaseViewed?: (request: Requests.CaseViewed) => AbortablePromise<Responses.CaseViewed>;
        Clear?: (request: Requests.Clear) => AbortablePromise<Responses.Clear>;
        InspectionViewed?: (request: Requests.InspectionViewed) => AbortablePromise<Responses.InspectionViewed>;
        ManholeInspectionViewed?: (request: Requests.ManholeInspectionViewed) => AbortablePromise<Responses.ManholeInspectionViewed>;
        RequestViewed?: (request: Requests.RequestViewed) => AbortablePromise<Responses.RequestViewed>;
        TvInspectionViewed?: (request: Requests.TvInspectionViewed) => AbortablePromise<Responses.TvInspectionViewed>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
        WorkOrderViewed?: (request: Requests.WorkOrderViewed) => AbortablePromise<Responses.WorkOrderViewed>;
    }
}
