import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { NumberingGroupServiceTypes as SvcDef } from '../../interfaces/PLL/NumberingGroupService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import INumberingGroupService = SvcDef.INumberingGroupService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/NumberingGroupService';
export declare class NumberingGroupService implements INumberingGroupService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
