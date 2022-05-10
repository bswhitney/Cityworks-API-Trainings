import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace GeneralCommentsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CommentCode?: string;
            ExpiredFlag?: string;
            GeneralComment?: string;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CommentId: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.GeneralCommentsItem> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<CoreTypes.GeneralCommentsItem> {}
    }
    export interface IGeneralCommentsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
    }
}
