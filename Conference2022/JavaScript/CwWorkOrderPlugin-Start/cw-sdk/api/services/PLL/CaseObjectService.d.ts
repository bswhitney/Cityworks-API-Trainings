import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseObjectServiceTypes as SvcDef } from '../../interfaces/PLL/CaseObjectService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseObjectService = SvcDef.ICaseObjectService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseObjectService';
export declare class CaseObjectService implements ICaseObjectService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    CreateCaseFromServiceRequest(request: Requests.CreateCaseFromServiceRequest): AbortablePromise<Responses.CreateCaseFromServiceRequest>;
    DeleteCase(request: Requests.DeleteCase): AbortablePromise<Responses.DeleteCase>;
    Move(request: Requests.Move): AbortablePromise<Responses.Move>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    ErrorCodes: {};
    WarningCodes: {};
}
