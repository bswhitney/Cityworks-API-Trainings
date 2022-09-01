import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CommentServiceTypes as SvcDef } from '../../interfaces/Ams/CommentService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICommentService = SvcDef.ICommentService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/CommentService';
export declare class CommentService implements ICommentService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByActivityIds(request: Requests.ByActivityIds): AbortablePromise<Responses.ByActivityIds>;
    ByActivitySids(request: Requests.ByActivitySids): AbortablePromise<Responses.ByActivitySids>;
    ByActivityTypes(request: Requests.ByActivityTypes): AbortablePromise<Responses.ByActivityTypes>;
    ProblemComments(request: Requests.ProblemComments): AbortablePromise<Responses.ProblemComments>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {
        UnknownError: number;
        MissingComments: number;
        MissingActivityIds: number;
        InvalidActivityId: number;
        InvalidCommentId: number;
        MissingActivitySids: number;
    };
    WarningCodes: {};
}
