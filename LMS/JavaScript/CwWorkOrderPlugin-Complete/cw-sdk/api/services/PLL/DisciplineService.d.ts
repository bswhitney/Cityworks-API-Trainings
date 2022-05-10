import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { DisciplineServiceTypes as SvcDef } from '../../interfaces/PLL/DisciplineService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IDisciplineService = SvcDef.IDisciplineService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/DisciplineService';
export declare class DisciplineService implements IDisciplineService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): AbortablePromise<Responses.All>;
    ErrorCodes: {};
    WarningCodes: {};
}
