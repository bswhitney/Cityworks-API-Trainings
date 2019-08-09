import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseCorrectionsServiceTypes as SvcDef } from '../../interfaces/PLL/CaseCorrectionsService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseCorrectionsService = SvcDef.ICaseCorrectionsService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseCorrectionsService';
export declare class CaseCorrectionsService implements ICaseCorrectionsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaTaskIds(request: Requests.ByCaTaskIds): AbortablePromise<Responses.ByCaTaskIds>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
