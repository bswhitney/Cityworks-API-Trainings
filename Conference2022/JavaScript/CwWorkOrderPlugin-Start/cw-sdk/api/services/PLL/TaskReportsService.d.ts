import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { TaskReportsServiceTypes as SvcDef } from '../../interfaces/PLL/TaskReportsService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITaskReportsService = SvcDef.ITaskReportsService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/TaskReportsService';
export declare class TaskReportsService implements ITaskReportsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
