import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { TasksServiceTypes as SvcDef } from '../../interfaces/Ams/TasksService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITasksService = SvcDef.ITasksService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/TasksService';
export declare class TasksService implements ITasksService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    ByWorkOrder(request: Requests.ByWorkOrder): AbortablePromise<Responses.ByWorkOrder>;
    ByWorkOrderTemplate(request: Requests.ByWorkOrderTemplate): AbortablePromise<Responses.ByWorkOrderTemplate>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Keywords(request: Requests.Keywords): AbortablePromise<Responses.Keywords>;
    Statuses(request: Requests.Statuses): AbortablePromise<Responses.Statuses>;
    TaskCodes(request: Requests.TaskCodes): AbortablePromise<Responses.TaskCodes>;
    TaskNodes(request: Requests.TaskNodes): AbortablePromise<Responses.TaskNodes>;
    Template(request: Requests.Template): AbortablePromise<Responses.Template>;
    Templates(request: Requests.Templates): AbortablePromise<Responses.Templates>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
