import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseRelDocsServiceTypes as SvcDef } from '../../interfaces/PLL/CaseRelDocsService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseRelDocsService = SvcDef.ICaseRelDocsService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseRelDocsService';
export declare class CaseRelDocsService implements ICaseRelDocsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    GetStoragePreferences(request: Requests.GetStoragePreferences): AbortablePromise<Responses.StoragePreferences>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
}
