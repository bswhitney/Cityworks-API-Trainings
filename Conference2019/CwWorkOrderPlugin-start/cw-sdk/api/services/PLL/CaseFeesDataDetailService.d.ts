import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseFeesDataDetailServiceTypes as SvcDef } from '../../interfaces/PLL/CaseFeesDataDetailService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseFeesDataDetailService = SvcDef.ICaseFeesDataDetailService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseFeesDataDetailService';
export declare class CaseFeesDataDetailService implements ICaseFeesDataDetailService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
}
