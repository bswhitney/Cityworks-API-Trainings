import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseFeesDataGroupServiceTypes as SvcDef } from '../../interfaces/PLL/CaseFeesDataGroupService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseFeesDataGroupService = SvcDef.ICaseFeesDataGroupService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseFeesDataGroupService';
export declare class CaseFeesDataGroupService implements ICaseFeesDataGroupService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
}
