import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CasePeopleServiceTypes as SvcDef } from '../../interfaces/PLL/CasePeopleService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICasePeopleService = SvcDef.ICasePeopleService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CasePeopleService';
export declare class CasePeopleService implements ICasePeopleService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    ErrorCodes: {};
    WarningCodes: {};
}
