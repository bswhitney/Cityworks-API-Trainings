import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseChildObjectServiceTypes as SvcDef } from '../../interfaces/PLL/CaseChildObjectService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseChildObjectService = SvcDef.ICaseChildObjectService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseChildObjectService';
export declare class CaseChildObjectService implements ICaseChildObjectService {
    private _service;
    constructor(service: IApiService);
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    GetList(request: Requests.GetList): AbortablePromise<Responses.GetList>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    ErrorCodes: {};
    WarningCodes: {};
}
