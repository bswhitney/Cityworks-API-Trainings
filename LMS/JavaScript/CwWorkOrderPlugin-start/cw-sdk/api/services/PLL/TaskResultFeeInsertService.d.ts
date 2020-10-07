import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { TaskResultFeeInsertServiceTypes as SvcDef } from '../../interfaces/PLL/TaskResultFeeInsertService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITaskResultFeeInsertService = SvcDef.ITaskResultFeeInsertService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/TaskResultFeeInsertService';
export declare class TaskResultFeeInsertService implements ITaskResultFeeInsertService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteByTaskId(request: Requests.DeleteByTaskId): AbortablePromise<Responses.DeleteByTaskId>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
