import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseTaskServiceTypes as SvcDef } from '../../interfaces/PLL/CaseTaskService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseTaskService = SvcDef.ICaseTaskService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseTaskService';
export declare class CaseTaskService implements ICaseTaskService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SetResult(request: Requests.SetResult): AbortablePromise<Responses.SetResult>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
