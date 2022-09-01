import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseDataListValuesServiceTypes as SvcDef } from '../../interfaces/PLL/CaseDataListValuesService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseDataListValuesService = SvcDef.ICaseDataListValuesService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseDataListValuesService';
export declare class CaseDataListValuesService implements ICaseDataListValuesService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    ErrorCodes: {};
    WarningCodes: {};
}
