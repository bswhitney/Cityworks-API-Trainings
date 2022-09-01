import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseDataDetailServiceTypes as SvcDef } from '../../interfaces/PLL/CaseDataDetailService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseDataDetailService = SvcDef.ICaseDataDetailService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseDataDetailService';
export declare class CaseDataDetailService implements ICaseDataDetailService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    UpdateLock(request: Requests.UpdateLock): AbortablePromise<Responses.UpdateLock>;
    WIPAdd(request: Requests.WIPAdd): AbortablePromise<Responses.Add>;
    ErrorCodes: {};
    WarningCodes: {};
}
