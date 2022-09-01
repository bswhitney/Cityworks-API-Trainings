import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseFeesServiceTypes as SvcDef } from '../../interfaces/PLL/CaseFeesService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseFeesService = SvcDef.ICaseFeesService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseFeesService';
export declare class CaseFeesService implements ICaseFeesService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    AddDefault(request: Requests.AddDefault): AbortablePromise<Responses.AddDefault>;
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    ErrorCodes: {};
    WarningCodes: {};
}
