import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ContractorServiceTypes as SvcDef } from '../../interfaces/Ams/ContractorService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IContractorService = SvcDef.IContractorService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/ContractorService';
export declare class ContractorService implements IContractorService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    AddKeywords(request: Requests.AddKeywords): AbortablePromise<Responses.AddKeywords>;
    All(request: Requests.All): AbortablePromise<Responses.All>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteKeywords(request: Requests.DeleteKeywords): AbortablePromise<Responses.DeleteKeywords>;
    Keywords(request: Requests.Keywords): AbortablePromise<Responses.Keywords>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
