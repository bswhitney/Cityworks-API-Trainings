import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace TaskReportsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            ReportId?: number;
            TaskId?: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ReportId?: number;
            TaskId?: number;
            TaskReportId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.TaskReportItem> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.TaskReportItem> {}
    }
    export interface ITaskReportsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
