import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ExpirationTypeServiceTypes as SvcDef } from '../../interfaces/PLL/ExpirationTypeService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IExpirationTypeService = SvcDef.IExpirationTypeService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/ExpirationTypeService';
export declare class ExpirationTypeService implements IExpirationTypeService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ErrorCodes: {};
    WarningCodes: {};
}
