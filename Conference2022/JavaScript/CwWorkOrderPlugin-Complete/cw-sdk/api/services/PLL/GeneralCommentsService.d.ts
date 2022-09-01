import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { GeneralCommentsServiceTypes as SvcDef } from '../../interfaces/PLL/GeneralCommentsService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IGeneralCommentsService = SvcDef.IGeneralCommentsService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/GeneralCommentsService';
export declare class GeneralCommentsService implements IGeneralCommentsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    ErrorCodes: {};
    WarningCodes: {};
}
