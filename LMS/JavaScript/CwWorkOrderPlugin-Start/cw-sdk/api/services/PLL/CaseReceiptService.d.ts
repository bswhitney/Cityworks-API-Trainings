import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseReceiptServiceTypes as SvcDef } from '../../interfaces/PLL/CaseReceiptService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseReceiptService = SvcDef.ICaseReceiptService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseReceiptService';
export declare class CaseReceiptService implements ICaseReceiptService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    ErrorCodes: {};
    WarningCodes: {};
}
