import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { PeopleServiceTypes as SvcDef } from '../../interfaces/PLL/PeopleService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPeopleService = SvcDef.IPeopleService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/PeopleService';
export declare class PeopleService implements IPeopleService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ErrorCodes: {};
    WarningCodes: {};
}
