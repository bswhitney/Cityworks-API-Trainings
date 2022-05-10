import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace TaskResultDetailServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            ResultId?: number;
            ResultSequence?: number;
            ResultSetId?: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ResultDetailId?: number;
            ResultId?: number;
            ResultSequence?: number;
            ResultSetId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.TaskResultDetailItem> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.TaskResultDetailItem> {}
    }
    export interface ITaskResultDetailService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
