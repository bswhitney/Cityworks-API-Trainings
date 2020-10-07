import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CommentServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            ActivityId: string;
            ActivityType: Enums.CommentActivityType;
            Comments: string;
        }
        export interface ByActivityIds extends ServiceTypes.CoreRequestBase {
            ActivityIds: string[];
            ActivityType: Enums.CommentActivityType;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ActivityType: Enums.CommentActivityType;
            CommentId: number;
            Comments: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CommentRecord> {}
        export interface ByActivityIds extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.CommentRecord[]}> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CommentRecord> {}
    }
    export interface ICommentService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByActivityIds?: (request: Requests.ByActivityIds) => AbortablePromise<Responses.ByActivityIds>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
