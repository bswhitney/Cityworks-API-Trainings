import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseFlagsServiceTypes as SvcDef } from '../../interfaces/PLL/CaseFlagsService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseFlagsService = SvcDef.ICaseFlagsService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseFlagsService';
export declare class CaseFlagsService implements ICaseFlagsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    ErrorCodes: {};
    WarningCodes: {};
}
