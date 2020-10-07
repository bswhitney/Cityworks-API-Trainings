import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseAssetServiceTypes as SvcDef } from '../../interfaces/PLL/CaseAssetService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseAssetService = SvcDef.ICaseAssetService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseAssetService';
export declare class CaseAssetService implements ICaseAssetService {
    private _service;
    constructor(service: IApiService);
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
}
