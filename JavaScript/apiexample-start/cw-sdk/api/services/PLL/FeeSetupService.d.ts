import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { FeeSetupServiceTypes as SvcDef } from '../../interfaces/PLL/FeeSetupService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IFeeSetupService = SvcDef.IFeeSetupService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/FeeSetupService';
export declare class FeeSetupService implements IFeeSetupService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): AbortablePromise<Responses.All>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
}
