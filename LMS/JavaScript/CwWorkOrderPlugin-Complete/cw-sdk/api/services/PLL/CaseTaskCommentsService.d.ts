import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseTaskCommentsServiceTypes as SvcDef } from '../../interfaces/PLL/CaseTaskCommentsService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseTaskCommentsService = SvcDef.ICaseTaskCommentsService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseTaskCommentsService';
export declare class CaseTaskCommentsService implements ICaseTaskCommentsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaTaskId(request: Requests.ByCaTaskId): AbortablePromise<Responses.ByCaTaskId>;
    ByCaTaskIds(request: Requests.ByCaTaskIds): AbortablePromise<Responses.ByCaTaskIds>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
