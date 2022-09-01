import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace TaskResultFeeInsertServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            FeeSetupId?: number;
            TaskId: number;
            TaskResultFeeInsertId: number;
            TaskResultId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            TaskResultFeeInsertId: number;
        }
        export interface DeleteByTaskId extends ServiceTypes.CoreRequestBase {
            TaskId: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            FeeSetupId?: number;
            TaskId: number;
            TaskResultFeeInsertId: number;
            TaskResultId: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.TaskResultFeeInsertItem> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<number> {}
        export interface DeleteByTaskId extends ServiceTypes.CoreResponseBase_<number> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.TaskResultFeeInsertItem> {}
    }
    export interface ITaskResultFeeInsertService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByTaskId?: (request: Requests.DeleteByTaskId) => AbortablePromise<Responses.DeleteByTaskId>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
