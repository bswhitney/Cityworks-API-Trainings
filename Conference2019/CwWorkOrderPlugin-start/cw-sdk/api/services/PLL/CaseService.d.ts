import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseServiceTypes as SvcDef } from '../../interfaces/PLL/CaseService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseService = SvcDef.ICaseService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseService';
export declare class CaseService implements ICaseService {
    private _service;
    constructor(service: IApiService);
    Create(request: Requests.Create): AbortablePromise<Responses.Create>;
    CreateChild(request: Requests.CreateChild): AbortablePromise<Responses.CreateChild>;
}
