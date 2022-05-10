import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseInstReleasesServiceTypes as SvcDef } from '../../interfaces/PLL/CaseInstReleasesService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseInstReleasesService = SvcDef.ICaseInstReleasesService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseInstReleasesService';
export declare class CaseInstReleasesService implements ICaseInstReleasesService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    ErrorCodes: {};
    WarningCodes: {};
}
