import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseInstrumentServiceTypes as SvcDef } from '../../interfaces/PLL/CaseInstrumentService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseInstrumentService = SvcDef.ICaseInstrumentService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseInstrumentService';
export declare class CaseInstrumentService implements ICaseInstrumentService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    GetList(request: Requests.GetList): AbortablePromise<Responses.GetList>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
}
