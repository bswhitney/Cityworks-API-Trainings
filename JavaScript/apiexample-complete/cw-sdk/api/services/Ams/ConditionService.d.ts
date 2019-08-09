import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ConditionServiceTypes as SvcDef } from '../../interfaces/Ams/ConditionService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IConditionService = SvcDef.IConditionService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/ConditionService';
export declare class ConditionService implements IConditionService {
    private _service;
    constructor(service: IApiService);
    History(request: Requests.History): AbortablePromise<Responses.History>;
}
