import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { DepositServiceTypes as SvcDef } from '../../interfaces/PLL/DepositService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IDepositService = SvcDef.IDepositService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/DepositService';
export declare class DepositService implements IDepositService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): AbortablePromise<Responses.All>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
}
