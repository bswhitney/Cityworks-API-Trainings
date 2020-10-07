import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CommentServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            ActivityId?: string;
            ActivitySid: number;
            ActivityType: Enums.CommentActivityType;
            Comments: string;
        }
        export interface ByActivityIds extends ServiceTypes.CoreRequestBase {
            ActivityIds: string[];
            ActivityType: Enums.CommentActivityType;
        }
        export interface ByActivitySids extends ServiceTypes.CoreRequestBase {
            ActivitySids: number[];
            ActivityType: Enums.CommentActivityType;
        }
        export interface ByActivityTypes extends ServiceTypes.CoreRequestBase {
            ActivityTypes: number[];
            Categories?: string[];
        }
        export interface ProblemComments extends ServiceTypes.CoreRequestBase {
            ProblemSids: number[];
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
        export interface ByActivitySids extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.CommentRecord[]}> {}
        export interface ByActivityTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.CategoryComment[]> {}
        export interface ProblemComments extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemComment[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CommentRecord> {}
    }
    export interface ICommentService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByActivityIds?: (request: Requests.ByActivityIds) => AbortablePromise<Responses.ByActivityIds>;
        ByActivitySids?: (request: Requests.ByActivitySids) => AbortablePromise<Responses.ByActivitySids>;
        ByActivityTypes?: (request: Requests.ByActivityTypes) => AbortablePromise<Responses.ByActivityTypes>;
        ProblemComments?: (request: Requests.ProblemComments) => AbortablePromise<Responses.ProblemComments>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
