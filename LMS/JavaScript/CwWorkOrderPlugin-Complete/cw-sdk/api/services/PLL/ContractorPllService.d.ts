import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ContractorPllServiceTypes as SvcDef } from '../../interfaces/PLL/ContractorPllService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IContractorPllService = SvcDef.IContractorPllService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/ContractorPllService';
export declare class ContractorPllService implements IContractorPllService {
    private _service;
    constructor(service: IApiService);
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    ErrorCodes: {};
    WarningCodes: {};
}
