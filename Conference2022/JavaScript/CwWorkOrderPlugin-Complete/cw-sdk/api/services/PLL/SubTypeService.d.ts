import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { SubTypeServiceTypes as SvcDef } from '../../interfaces/PLL/SubTypeService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ISubTypeService = SvcDef.ISubTypeService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/SubTypeService';
export declare class SubTypeService implements ISubTypeService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
