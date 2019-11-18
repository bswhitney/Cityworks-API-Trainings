import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseTaskCommentsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaTaskId: number;
            CommentId?: number;
            CommentText: string;
        }
        export interface ByCaTaskId extends ServiceTypes.CoreRequestBase {
            CaTaskId?: number;
        }
        export interface ByCaTaskIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaTaskCommentIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CaTaskCommentId?: number;
            CommentId?: number;
            Commenttext?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskCommentsItemBase> {}
        export interface ByCaTaskId extends ServiceTypes.CoreResponseBase_<CoreTypes.CommentRecord[]> {}
        export interface ByCaTaskIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaTaskCommentsItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskCommentsItemBase> {}
    }
    export interface ICaseTaskCommentsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaTaskId?: (request: Requests.ByCaTaskId) => AbortablePromise<Responses.ByCaTaskId>;
        ByCaTaskIds?: (request: Requests.ByCaTaskIds) => AbortablePromise<Responses.ByCaTaskIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
