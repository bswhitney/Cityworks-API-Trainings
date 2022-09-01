import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { DivisionServiceTypes as SvcDef } from '../../interfaces/PLL/DivisionService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IDivisionService = SvcDef.IDivisionService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/DivisionService';
export declare class DivisionService implements IDivisionService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ErrorCodes: {};
    WarningCodes: {};
}
