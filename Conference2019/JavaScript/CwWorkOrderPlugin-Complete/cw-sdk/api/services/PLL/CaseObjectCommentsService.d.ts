import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseObjectCommentsServiceTypes as SvcDef } from '../../interfaces/PLL/CaseObjectCommentsService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseObjectCommentsService = SvcDef.ICaseObjectCommentsService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseObjectCommentsService';
export declare class CaseObjectCommentsService implements ICaseObjectCommentsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
