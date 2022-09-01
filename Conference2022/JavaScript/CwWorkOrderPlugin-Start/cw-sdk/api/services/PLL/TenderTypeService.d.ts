import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { TenderTypeServiceTypes as SvcDef } from '../../interfaces/PLL/TenderTypeService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITenderTypeService = SvcDef.ITenderTypeService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/TenderTypeService';
export declare class TenderTypeService implements ITenderTypeService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
