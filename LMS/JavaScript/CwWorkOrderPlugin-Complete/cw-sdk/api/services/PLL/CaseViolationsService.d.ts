import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseViolationsServiceTypes as SvcDef } from '../../interfaces/PLL/CaseViolationsService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseViolationsService = SvcDef.ICaseViolationsService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseViolationsService';
export declare class CaseViolationsService implements ICaseViolationsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    ByCaObjectIds(request: Requests.ByCaObjectIds): AbortablePromise<Responses.ByCaObjectIds>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    CompleteViolations(request: Requests.CompleteViolations): AbortablePromise<Responses.CompleteViolations>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
