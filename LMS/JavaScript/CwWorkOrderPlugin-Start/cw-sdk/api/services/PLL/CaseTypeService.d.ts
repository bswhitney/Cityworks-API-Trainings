import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseTypeServiceTypes as SvcDef } from '../../interfaces/PLL/CaseTypeService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseTypeService = SvcDef.ICaseTypeService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseTypeService';
export declare class CaseTypeService implements ICaseTypeService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    GetList(request: Requests.GetList): AbortablePromise<Responses.GetList>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
