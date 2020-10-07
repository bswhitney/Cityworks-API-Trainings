import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseObjectCommentsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CommentText: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaObjectCommentIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CaObjectCommentId?: number;
            Commenttext?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaObjectCommentsItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CoreTypes.CommentRecord[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CaObjectCommentsItemBase> {}
    }
    export interface ICaseObjectCommentsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
