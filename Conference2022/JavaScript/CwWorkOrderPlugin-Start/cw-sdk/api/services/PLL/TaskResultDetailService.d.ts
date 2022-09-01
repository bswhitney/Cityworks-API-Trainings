import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { TaskResultDetailServiceTypes as SvcDef } from '../../interfaces/PLL/TaskResultDetailService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITaskResultDetailService = SvcDef.ITaskResultDetailService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/TaskResultDetailService';
export declare class TaskResultDetailService implements ITaskResultDetailService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
