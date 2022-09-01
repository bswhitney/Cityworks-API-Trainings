import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseStatusServiceTypes as SvcDef } from '../../interfaces/PLL/CaseStatusService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseStatusService = SvcDef.ICaseStatusService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseStatusService';
export declare class CaseStatusService implements ICaseStatusService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
