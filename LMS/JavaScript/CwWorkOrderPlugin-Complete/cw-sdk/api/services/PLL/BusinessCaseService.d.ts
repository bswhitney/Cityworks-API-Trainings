import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { BusinessCaseServiceTypes as SvcDef } from '../../interfaces/PLL/BusinessCaseService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IBusinessCaseService = SvcDef.IBusinessCaseService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/BusinessCaseService';
export declare class BusinessCaseService implements IBusinessCaseService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
