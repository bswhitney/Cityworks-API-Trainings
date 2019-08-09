import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ActivityLinkServiceTypes as SvcDef } from '../../interfaces/General/ActivityLinkService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IActivityLinkService = SvcDef.IActivityLinkService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/ActivityLinkService';
export declare class ActivityLinkService implements IActivityLinkService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByActivityIds(request: Requests.ByActivityIds): AbortablePromise<Responses.ByActivityIds>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Remove(request: Requests.Remove): AbortablePromise<Responses.Remove>;
}
