import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ContractorTypeServiceTypes as SvcDef } from '../../interfaces/PLL/ContractorTypeService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IContractorTypeService = SvcDef.IContractorTypeService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/ContractorTypeService';
export declare class ContractorTypeService implements IContractorTypeService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): AbortablePromise<Responses.All>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    ErrorCodes: {};
    WarningCodes: {};
}
