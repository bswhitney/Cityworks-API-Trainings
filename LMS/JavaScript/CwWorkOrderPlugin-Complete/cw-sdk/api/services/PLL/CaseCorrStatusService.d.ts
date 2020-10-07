import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseCorrStatusServiceTypes as SvcDef } from '../../interfaces/PLL/CaseCorrStatusService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseCorrStatusService = SvcDef.ICaseCorrStatusService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseCorrStatusService';
export declare class CaseCorrStatusService implements ICaseCorrStatusService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaCorrectionsIds(request: Requests.ByCaCorrectionsIds): AbortablePromise<Responses.ByCaCorrectionsIds>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
}
